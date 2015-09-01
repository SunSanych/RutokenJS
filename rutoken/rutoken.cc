#include <node.h>
#include <node_buffer.h>
#include <v8.h>
#include <Common.h>
#include <string>
#include <config.h> // #define PKCS11ECP_LIBRARY_PATH для локального использования и добавлен в .gitignore

#define STR_LEN(s) (sizeof(s)/sizeof(s[0]))

using namespace v8;

bool bInitialize = false; // Флаг инициализации библиотеки PKCS#11 fnInitialize()
bool bLogin      = false; // Флаг аутентификации

HMODULE				 hModule	   = NULL_PTR; // Хэндл загруженной библиотеки PKCS#11
CK_SESSION_HANDLE	 hSession      = NULL_PTR; // Хэндл открытой сессии
CK_FUNCTION_LIST_PTR pFunctionList = NULL_PTR; // Указатель на список функций PKCS#11, хранящийся в структуре CK_FUNCTION_LIST

CK_SLOT_INFO      slotInfo;  // Структура данных типа CK_SLOT_INFO с информацией о слоте
CK_TOKEN_INFO     tokenInfo; // Структура данных типа CK_TOKEN_INFO с информацией о токене
CK_MECHANISM_INFO mechInfo;  // Структура данных типа CK_MECHANISM_INFO с информацией о механизме

CK_SLOT_ID_PTR        aSlots      = NULL_PTR; // Указатель на массив идентификаторов всех доступных слотов
CK_MECHANISM_TYPE_PTR aMechanisms = NULL_PTR; // Указатель на массив механизмов, поддерживаемых слотом

CK_ULONG ulSlotCount	  = 0; // Количество идентификаторов всех доступных слотов в массиве
CK_ULONG ulMechanismCount = 0; // Количество идентификаторов механизмов в массиве

DWORD i	  = 0;	       // Вспомогательная переменная-счетчик для циклов
CK_RV rv	 = CKR_OK; // Вспомогательная переменная для хранения кода возврата
CK_RV rvTemp = CKR_OK; // Вспомогательная переменная для хранения кода возврата

Local<String> _S(Isolate* isolate, const std::string& value) {
	return String::NewFromUtf8(isolate, value.c_str());
}
Local<String> _S(Isolate* isolate, const CK_UTF8CHAR_PTR value, int maxSize) {
	int len = maxSize;
	for (const char* p = (const char*)value + maxSize - 1; p > (const char*)value && *p == 0x20; --p, --len) {}
	return String::NewFromUtf8(isolate, (const char*)value, String::kNormalString, len);
}

Local<Integer> _I(Isolate* isolate, int value) {
	return Integer::New(isolate, value);
}

Local<Object> version2Object(Isolate* isolate, const CK_VERSION& version)
{
	Local<Object> ret = Object::New(isolate);
	ret->Set(_S(isolate, "major"), _I(isolate, (int)version.major));
	ret->Set(_S(isolate, "minor"), _I(isolate, (int)version.minor));
	return ret;
}

//
// Инициализация библиотеки rtPKCS11ECP.dll
//
void fnInitialize(const FunctionCallbackInfo<Value>& args) {

	if (!bInitialize) {
		rv = CKR_FUNCTION_FAILED;

		// Шаг 1: Загрузить библиотеку.
		hModule = LoadLibrary(PKCS11ECP_LIBRARY_PATH);

		// Шаг 2: Получить адрес функции запроса структуры с указателями на функции.
		if (hModule != NULL_PTR) {

			// Указатель на функцию C_GetFunctionList
			CK_C_GetFunctionList pfGetFunctionList = (CK_C_GetFunctionList)GetProcAddress(hModule, "C_GetFunctionList");

			// Шаг 3: Получить структуру с указателями на функции.
			if (pfGetFunctionList != NULL_PTR) {
				rv = pfGetFunctionList(&pFunctionList);

				// Шаг 4: Инициализировать библиотеку.
				if (rv == CKR_OK) {
					rv = pFunctionList->C_Initialize(NULL_PTR);
					// Шаг 5: Установить флаг bInitialize = true.
					if (rv == CKR_OK) {
						bInitialize = true;
					}
				}
			}
		}
	}

	if(rv == CKR_OK || bInitialize) {
		args.GetReturnValue().Set(0);
	} else {
		args.GetReturnValue().Set(-(int)rv);
	}

}

//
// isInitialize
//
void isInitialize(const FunctionCallbackInfo<Value>& args) {
	args.GetReturnValue().Set(bInitialize);
}

//
// Finalize
//
void fnFinalize(const FunctionCallbackInfo<Value>& args) {
	rv = CKR_CRYPTOKI_NOT_INITIALIZED;

	if (bInitialize && pFunctionList != NULL_PTR) {
		rv = pFunctionList->C_Finalize(NULL_PTR);
		if (rv == CKR_OK) {
			bInitialize = false;
		}
	}

	if(rv == CKR_OK) {
		args.GetReturnValue().Set(0);
	} else {
		args.GetReturnValue().Set(-(int)rv);
	}
}

//
// Получает информацию о библиотеке
//
void fnGetLibInfo(const FunctionCallbackInfo<Value>& args)
{
	rv = CKR_CRYPTOKI_NOT_INITIALIZED;

	if (bInitialize && pFunctionList != NULL_PTR)
	{
		CK_INFO info;
		rv = pFunctionList->C_GetInfo(&info);

		if (rv == CKR_OK)
		{
			Isolate* isolate = Isolate::GetCurrent();
			HandleScope scope(isolate);

			Local<Object> obj = Object::New(isolate);

			// cryptokiVersion
			obj->Set(_S(isolate, "cryptokiVersion"), version2Object(isolate, info.cryptokiVersion));

			// manufacturerID
			obj->Set(_S(isolate, "manufacturerID"), _S(isolate, info.manufacturerID, STR_LEN(info.manufacturerID)));

			// flags
			obj->Set(_S(isolate, "flags"), _I(isolate, info.flags));

			// libraryDescription
			obj->Set(_S(isolate, "libraryDescription"), _S(isolate, info.libraryDescription, STR_LEN(info.manufacturerID)));

			// libraryVersion
			obj->Set(_S(isolate, "libraryVersion"), version2Object(isolate, info.libraryVersion));

			args.GetReturnValue().Set(obj);
			return;
		}
	}

	args.GetReturnValue().Set(-(int)rv);

}

//
// Количество зарегистрированных слотов (подключенных токенов) в системе
// Используется функция: C_GetSlotList
//
void fnCountSlot(const FunctionCallbackInfo<Value>& args) {
	rv = pFunctionList->C_GetSlotList(CK_TRUE, NULL_PTR, &ulSlotCount);

	if (rv == CKR_OK) {
		aSlots = (CK_SLOT_ID*)malloc(ulSlotCount * sizeof(CK_SLOT_ID));
		memset(aSlots, 0, (ulSlotCount * sizeof(CK_SLOT_ID)));
		rv = pFunctionList->C_GetSlotList(CK_TRUE, aSlots, &ulSlotCount);
		if (rv == CKR_OK) {
			args.GetReturnValue().Set((int)ulSlotCount);
            return;
		}
	}

    if(rv == CKR_OK) {
		args.GetReturnValue().Set(0);
	} else {
		args.GetReturnValue().Set(-(int)rv);
	}

}

//
// Получить информацию из слота
// Используется функция: C_GetSlotInfo
//
void fnGetSlotInfo(const FunctionCallbackInfo<Value>& args)
{
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);
	TryCatch trycatch(isolate);

	rv = CKR_CRYPTOKI_NOT_INITIALIZED;

	//Exception::Error(_S(isolate, "Exception"));
	//MessageCallback("Exception");
	//trycatch.Exception();

	if (bInitialize && pFunctionList != NULL_PTR)
	{

		//CK_INFO info;
		//rv = pFunctionList->C_GetInfo(&info);

		int slot = aSlots[(int)args[0]->NumberValue()];

		// Callback
		Local<Function> cb   = Local<Function>::Cast(args[1]);

		Local<Object>   obj   = Object::New(isolate);
		Local<Object>   objHV = Object::New(isolate);
		Local<Object>   objFV = Object::New(isolate);

		rv = pFunctionList->C_GetSlotInfo(slot, &slotInfo);

		if (rv == CKR_OK) {
			std::string str;

			// Slot description
			//str = (const char *)slotInfo.slotDescription;
			//obj->Set(_S(isolate, "description"), _S(isolate, str.substr(0, (int)sizeof(slotInfo.slotDescription))));
			obj->Set(_S(isolate, "description"), _S(isolate, slotInfo.slotDescription, STR_LEN(slotInfo.slotDescription)));

			// Manufacturer
			obj->Set(_S(isolate, "manufacturerID"), _S(isolate, slotInfo.manufacturerID, STR_LEN(slotInfo.manufacturerID)));

			// Flags
			obj->Set(_S(isolate, "flags"), _I(isolate, (int)slotInfo.flags));

			// Hardware Version
			obj->Set(_S(isolate, "hardwareVersion"), version2Object(isolate, slotInfo.hardwareVersion));

			// Firmware Version
			obj->Set(_S(isolate, "firmwareVersion"), version2Object(isolate, slotInfo.firmwareVersion));

			Local<Value> argv[1] = { obj };
			cb->Call(isolate->GetCurrentContext()->Global(), 1, argv);

		}
	}

    if (rv == CKR_OK) {
        args.GetReturnValue().Set(0);
    } else {
        args.GetReturnValue().Set(-(int)rv);
    }

}

//
// Получить информацию из токена
// Используется функция: C_GetTokenInfo
//
void fnGetTokenInfo(const FunctionCallbackInfo<Value>& args) {

	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	int slot = aSlots[(int)args[0]->NumberValue()];

	// Callback
	Local<Function> cb   = Local<Function>::Cast(args[1]);

	Local<Object>   obj   = Object::New(isolate);
	Local<Object>   objHV = Object::New(isolate);
	Local<Object>   objFV = Object::New(isolate);

	memset(&tokenInfo, 0, sizeof(CK_TOKEN_INFO));
	rv = pFunctionList->C_GetTokenInfo(slot, &tokenInfo);

	if (rv == CKR_OK) {
		std::string str;

		// Token label
		str = (const char *)tokenInfo.label;
		obj->Set(_S(isolate, "label"), _S(isolate, str.substr(0, (int)sizeof(tokenInfo.label))));

		// Manufacturer
		str = (const char *)tokenInfo.manufacturerID;
		obj->Set(_S(isolate, "manufacturerID"), _S(isolate, str.substr(0, (int)sizeof(tokenInfo.manufacturerID))));

		// Token model
		str = (const char *)tokenInfo.model;
		obj->Set(_S(isolate, "model"), _S(isolate, str.substr(0, (int)sizeof(tokenInfo.model))));

		// Token serial number
		str = (const char *)tokenInfo.serialNumber;
		obj->Set(_S(isolate, "serialNumber"), _S(isolate, str.substr(0, (int)sizeof(tokenInfo.serialNumber))));

		// Flags
		obj->Set(_S(isolate, "flags"), _I(isolate, (int)tokenInfo.flags));

		// Max session count
		obj->Set(_S(isolate, "maxSessionCount"), _I(isolate, (int)tokenInfo.ulMaxSessionCount));

		// Current session count
		obj->Set(_S(isolate, "sessionCount"), _I(isolate, (int)tokenInfo.ulSessionCount));

		// Max RW session count
		obj->Set(_S(isolate, "maxRwSessionCount"), _I(isolate, (int)tokenInfo.ulMaxRwSessionCount));

		// Current RW session count
		obj->Set(_S(isolate, "rwSessionCount"), _I(isolate, (int)tokenInfo.ulRwSessionCount));

		// Max PIN length
		obj->Set(_S(isolate, "maxPinLen"), _I(isolate, (int)tokenInfo.ulMaxPinLen));

		// Min PIN length
		obj->Set(_S(isolate, "minPinLen"), _I(isolate, (int)tokenInfo.ulMinPinLen));

		// Total public memory
		obj->Set(_S(isolate, "totalPublicMemory"), _I(isolate, (int)tokenInfo.ulTotalPublicMemory));

		// Free public memory
		obj->Set(_S(isolate, "freePublicMemory"), _I(isolate, (int)tokenInfo.ulFreePublicMemory));

		// Total private memory
		obj->Set(_S(isolate, "totalPrivateMemory"), _I(isolate, (int)tokenInfo.ulTotalPrivateMemory));

		// Free private memory
		obj->Set(_S(isolate, "freePrivateMemory"), _I(isolate, (int)tokenInfo.ulFreePrivateMemory));

		// Hardware version
		objHV->Set(_S(isolate, "major"), _I(isolate, (int)tokenInfo.hardwareVersion.major));
		objHV->Set(_S(isolate, "minor"), _I(isolate, (int)tokenInfo.hardwareVersion.minor));
		obj->Set(_S(isolate, "hardwareVersion"), objHV);

		// Firmware version
		objFV->Set(_S(isolate, "major"), _I(isolate, (int)tokenInfo.firmwareVersion.major));
		objFV->Set(_S(isolate, "minor"), _I(isolate, (int)tokenInfo.firmwareVersion.minor));
		obj->Set(_S(isolate, "firmwareVersion"), objFV);

		// Timer #
		str = (const char *)tokenInfo.utcTime;
		obj->Set(_S(isolate, "utcTime"), _S(isolate, str.substr(0, (int)sizeof(tokenInfo.utcTime))));

		Local<Value> argv[1] = { obj };
		cb->Call(isolate->GetCurrentContext()->Global(), 1, argv);

	}

    if (rv == CKR_OK) {
        args.GetReturnValue().Set(0);
    } else {
        args.GetReturnValue().Set(-(int)rv);
    }

}

//
// Получить список доступных механизмов токена
// Используется функция: C_GetMechanismList
//
void fnGetMechanismList(const FunctionCallbackInfo<Value>& args) {

	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	int slot = aSlots[(int)args[0]->NumberValue()];

	// Callback
	Local<Function> cb = Local<Function>::Cast(args[1]);

	Local<Object> obj = Object::New(isolate);

	ulMechanismCount = 0;
	rv = pFunctionList->C_GetMechanismList(slot, NULL_PTR, &ulMechanismCount);

	if(rv == CKR_OK) {
		aMechanisms = (CK_MECHANISM_TYPE*)malloc(sizeof(CK_MECHANISM_TYPE) * ulMechanismCount);
		memset(aMechanisms, 0, (sizeof(CK_MECHANISM_TYPE) * ulMechanismCount));
		rv = pFunctionList->C_GetMechanismList(slot, aMechanisms, &ulMechanismCount);
		if(rv == CKR_OK) {
			Local<Array>  arr  = Array::New(isolate);

			obj->Set(_S(isolate, "count"), _I(isolate, (int)ulMechanismCount));
			obj->Set(_S(isolate, "list"), arr);

			for (i = 0; i < ulMechanismCount; i++) {
				memset(&mechInfo, 0, sizeof(CK_MECHANISM_INFO));
				rv = pFunctionList->C_GetMechanismInfo(slot, aMechanisms[i], &mechInfo);
				if (rv == CKR_OK) {
					Local<Object> objM = Object::New(isolate);
					objM->Set(_S(isolate, "type"),	   _I(isolate, (int)aMechanisms[i]));
					objM->Set(_S(isolate, "minKeySize"), _I(isolate, (int)mechInfo.ulMinKeySize));
					objM->Set(_S(isolate, "maxKeySize"), _I(isolate, (int)mechInfo.ulMaxKeySize));
					objM->Set(_S(isolate, "flags"),	  _I(isolate, (int)mechInfo.flags));
					arr->Set(i, objM);
				} else {
					break;
				}
			}

			Local<Value> argv[1] = { obj };
			cb->Call(isolate->GetCurrentContext()->Global(), 1, argv);

			args.GetReturnValue().Set(obj);
		} else {
			// TODO

		}
	} else {
		// TODO

	}

}

//
// Функция открывает сессию и авторизует пользователя на токене.
//
void fnLogin(const FunctionCallbackInfo<Value>& args)
{
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	int slot = aSlots[(int)args[0]->NumberValue()];

	// PIN
	String::Utf8Value arg1(args[1]->ToString());
	std::string pin = std::string(*arg1);

	// Открываем сессию
	rv = pFunctionList->C_OpenSession(slot, CKF_SERIAL_SESSION | CKF_RW_SESSION, NULL_PTR, NULL_PTR, &hSession);

	if(rv == CKR_OK) {
		// Выполняем аутентификацию
		rv = pFunctionList->C_Login(hSession, CKU_USER, ((CK_UTF8CHAR_PTR)pin.c_str()), (CK_ULONG)pin.size());
	}

	if(rv == CKR_OK) {
		args.GetReturnValue().Set(0);
	} else {
		args.GetReturnValue().Set(-(int)rv);
	}
}

//
// random(size, callback(res))
// Генерирует случайное число размером size
// Возвращает объект или код ошибки
//
void fnRandom(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	rv = CKR_ARGUMENTS_BAD;

	// Callback
	Local<Function> cb = Local<Function>::Cast(args[1]);

	if(args.Length() == 2) {
		rv = CKR_SESSION_HANDLE_INVALID;
		CK_ULONG size = (CK_ULONG)args[0]->NumberValue();

		// Если есть открытая сессия и успешная аутентификация
		if(hSession != NULL_PTR) {
			CK_BYTE *randomData = new CK_BYTE[size];

			rv = pFunctionList->C_GenerateRandom(hSession, randomData, size);
			if (rv == CKR_OK) {

				Local<Object>   obj    = Object::New(isolate);
				Local<Array>    arrInt = Array::New(isolate);
				Local<Array>    arrHex = Array::New(isolate);

				for (i = 0; i < size; i++) {
					// Int array
					arrInt->Set(i, _I(isolate, randomData[i]));

					// Hex array
					char buffer[2];
					sprintf(buffer, "%02x", randomData[i]);
					arrHex->Set(i, _S(isolate, buffer));
				}

				obj->Set(_S(isolate, "int"), arrInt);
				obj->Set(_S(isolate, "hex"), arrHex);
				obj->Set(_S(isolate, "length"), _I(isolate, size));

				// Возврат объекта с массивами (int, hex) случайных данных
				Local<Value> argv[1] = { obj };
				cb->Call(isolate->GetCurrentContext()->Global(), 1, argv);

				return;
			}
		}
	}

	// Возврат кода ошибки
	Local<Value> argv[1] = { _I(isolate, -(int)rv) };
	cb->Call(isolate->GetCurrentContext()->Global(), 1, argv);

}

//
// Инициализирует память Рутокен
// Используется функция: C_InitToken
//
// Функция готова к использованию, но закомментирована потому что нет устройства чтобы протестировать правильную работу функции
//void fnInitToken(const FunctionCallbackInfo<Value>& args)
//{
//	rv = CKR_CRYPTOKI_NOT_INITIALIZED;
//	if (bInitialize && pFunctionList != NULL_PTR)
//	{
//		if (args.Length() < 3)
//		{
//			if (aSlots != NULL)
//			{
//				Isolate* isolate = Isolate::GetCurrent();
//				HandleScope scope(isolate);
//
//				int arg0 = (int)args[0]->NumberValue();
//				if (arg0 >= 0 && arg0 < (int)ulSlotCount)
//				{
//					int slotId = aSlots[arg0];
//					String::Utf8Value pin(args[1]->ToString());
//					String::Utf8Value label(args[2]->ToString());
//
//					rv = pFunctionList->C_InitToken(slotId, (CK_UTF8CHAR_PTR)*pin, pin.length(), (CK_UTF8CHAR_PTR)*label);
//				}
//				else
//					rv = CKR_SLOT_ID_INVALID;
//			}
//			else
//				rv = CKR_SLOT_ID_INVALID;
//		}
//		else
//			rv = CKR_ARGUMENTS_BAD;
//	}
//
//	args.GetReturnValue().Set(-(int)rv);
//}

//
// Инициализация функций и модуля
//
void init(Handle<Object> exports) {
	NODE_SET_METHOD(exports, "initialize",       fnInitialize);
	NODE_SET_METHOD(exports, "isInitialize",     isInitialize);
    NODE_SET_METHOD(exports, "finalize",         fnFinalize);
	NODE_SET_METHOD(exports, "getLibInfo",       fnGetLibInfo);
	NODE_SET_METHOD(exports, "countSlot",        fnCountSlot);
	NODE_SET_METHOD(exports, "getSlotInfo",      fnGetSlotInfo);
	NODE_SET_METHOD(exports, "getTokenInfo",     fnGetTokenInfo);
	NODE_SET_METHOD(exports, "getMechanismList", fnGetMechanismList);
	NODE_SET_METHOD(exports, "login",            fnLogin);
	NODE_SET_METHOD(exports, "random",           fnRandom);
	// Функция готова к использованию, но закомментирована потому что нет устройства чтобы протестировать правильную работу функции
	//NODE_SET_METHOD(exports, "initToken",        fnInitToken);
}
NODE_MODULE(rutoken, init);
