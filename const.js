var CKR = Array();

CKR[0x00000000]  = "OK";
CKR[-0x00000001] = "CANCEL";
CKR[-0x00000002] = "HOST_MEMORY";
CKR[-0x00000003] = "SLOT_ID_INVALID";
CKR[-0x00000005] = "GENERAL_ERROR";
CKR[-0x00000006] = "FUNCTION_FAILED";
CKR[-0x00000007] = "ARGUMENTS_BAD";
CKR[-0x00000008] = "NO_EVENT";
CKR[-0x00000009] = "NEED_TO_CREATE_THREADS";
CKR[-0x0000000A] = "CANT_LOCK"
CKR[-0x00000010] = "ATTRIBUTE_READ_ONLY";
CKR[-0x00000011] = "ATTRIBUTE_SENSITIVE";
CKR[-0x00000012] = "ATTRIBUTE_TYPE_INVALID";
CKR[-0x00000013] = "ATTRIBUTE_VALUE_INVALID";
CKR[-0x00000020] = "DATA_INVALID";
CKR[-0x00000021] = "DATA_LEN_RANGE";
CKR[-0x00000030] = "DEVICE_ERROR";
CKR[-0x00000031] = "DEVICE_MEMORY";
CKR[-0x00000032] = "DEVICE_REMOVED";
CKR[-0x00000040] = "ENCRYPTED_DATA_INVALID";
CKR[-0x00000041] = "ENCRYPTED_DATA_LEN_RANGE";
CKR[-0x00000050] = "FUNCTION_CANCELED";
CKR[-0x00000051] = "FUNCTION_NOT_PARALLEL";
CKR[-0x00000054] = "FUNCTION_NOT_SUPPORTED";
CKR[-0x00000060] = "KEY_HANDLE_INVALID";
CKR[-0x00000062] = "KEY_SIZE_RANGE";
CKR[-0x00000063] = "KEY_TYPE_INCONSISTENT";
CKR[-0x00000064] = "KEY_NOT_NEEDED";
CKR[-0x00000065] = "KEY_CHANGED";
CKR[-0x00000066] = "KEY_NEEDED";
CKR[-0x00000067] = "KEY_INDIGESTIBLE";
CKR[-0x00000068] = "KEY_FUNCTION_NOT_PERMITTED";
CKR[-0x00000069] = "KEY_NOT_WRAPPABLE";
CKR[-0x0000006A] = "KEY_UNEXTRACTABLE";
CKR[-0x00000070] = "MECHANISM_INVALID";
CKR[-0x00000071] = "MECHANISM_PARAM_INVALID";
CKR[-0x00000082] = "OBJECT_HANDLE_INVALID";
CKR[-0x00000090] = "OPERATION_ACTIVE";
CKR[-0x00000091] = "OPERATION_NOT_INITIALIZED";
CKR[-0x000000A0] = "PIN_INCORRECT";
CKR[-0x000000A1] = "PIN_INVALID";
CKR[-0x000000A2] = "PIN_LEN_RANGE";
CKR[-0x000000A3] = "PIN_EXPIRED";
CKR[-0x000000A4] = "PIN_LOCKED";
CKR[-0x000000B0] = "SESSION_CLOSED";
CKR[-0x000000B1] = "SESSION_COUNT";
CKR[-0x000000B3] = "SESSION_HANDLE_INVALID";
CKR[-0x000000B4] = "SESSION_PARALLEL_NOT_SUPPORTED";
CKR[-0x000000B5] = "SESSION_READ_ONLY";
CKR[-0x000000B6] = "SESSION_EXISTS";
CKR[-0x000000B7] = "SESSION_READ_ONLY_EXISTS";
CKR[-0x000000B8] = "SESSION_READ_WRITE_SO_EXISTS";
CKR[-0x000000C0] = "SIGNATURE_INVALID";
CKR[-0x000000C1] = "SIGNATURE_LEN_RANGE";
CKR[-0x000000D0] = "TEMPLATE_INCOMPLETE";
CKR[-0x000000D1] = "TEMPLATE_INCONSISTENT";
CKR[-0x000000E0] = "TOKEN_NOT_PRESENT";
CKR[-0x000000E1] = "TOKEN_NOT_RECOGNIZED";
CKR[-0x000000E2] = "TOKEN_WRITE_PROTECTED";
CKR[-0x000000F0] = "UNWRAPPING_KEY_HANDLE_INVALID";
CKR[-0x000000F1] = "UNWRAPPING_KEY_SIZE_RANGE";
CKR[-0x000000F2] = "UNWRAPPING_KEY_TYPE_INCONSISTENT";
CKR[-0x00000100] = "USER_ALREADY_LOGGED_IN";
CKR[-0x00000101] = "USER_NOT_LOGGED_IN";
CKR[-0x00000102] = "USER_PIN_NOT_INITIALIZED";
CKR[-0x00000103] = "USER_TYPE_INVALID";
CKR[-0x00000104] = "USER_ANOTHER_ALREADY_LOGGED_IN";
CKR[-0x00000105] = "USER_TOO_MANY_TYPES";
CKR[-0x00000110] = "WRAPPED_KEY_INVALID";
CKR[-0x00000112] = "WRAPPED_KEY_LEN_RANGE";
CKR[-0x00000113] = "WRAPPING_KEY_HANDLE_INVALID";
CKR[-0x00000114] = "WRAPPING_KEY_SIZE_RANGE";
CKR[-0x00000115] = "WRAPPING_KEY_TYPE_INCONSISTENT";
CKR[-0x00000120] = "RANDOM_SEED_NOT_SUPPORTED";
CKR[-0x00000121] = "RANDOM_NO_RNG";
CKR[-0x00000130] = "DOMAIN_PARAMS_INVALID";
CKR[-0x00000150] = "BUFFER_TOO_SMALL";
CKR[-0x00000160] = "SAVED_STATE_INVALID";
CKR[-0x00000170] = "INFORMATION_SENSITIVE";
CKR[-0x00000180] = "STATE_UNSAVEABLE";
CKR[-0x00000190] = "CRYPTOKI_NOT_INITIALIZED";
CKR[-0x00000191] = "CRYPTOKI_ALREADY_INITIALIZED";
CKR[-0x000001A0] = "MUTEX_BAD";
CKR[-0x000001A1] = "MUTEX_NOT_LOCKED";
CKR[-0x000001B0] = "NEW_PIN_MODE";
CKR[-0x000001B1] = "NEXT_OTP";
CKR[-0x00000200] = "FUNCTION_REJECTED";
CKR[-0x80000000] = "VENDOR_DEFINED";

const CKR_OK                                = 0x00000000
const CKR_CANCEL                            = -0x00000001
const CKR_HOST_MEMORY                       = -0x00000002
const CKR_SLOT_ID_INVALID                   = -0x00000003
const CKR_GENERAL_ERROR                     = -0x00000005
const CKR_FUNCTION_FAILED                   = -0x00000006
const CKR_ARGUMENTS_BAD                     = -0x00000007
const CKR_NO_EVENT                          = -0x00000008
const CKR_NEED_TO_CREATE_THREADS            = -0x00000009
const CKR_CANT_LOCK                         = -0x0000000A
const CKR_ATTRIBUTE_READ_ONLY               = -0x00000010
const CKR_ATTRIBUTE_SENSITIVE               = -0x00000011
const CKR_ATTRIBUTE_TYPE_INVALID            = -0x00000012
const CKR_ATTRIBUTE_VALUE_INVALID           = -0x00000013
const CKR_DATA_INVALID                      = -0x00000020
const CKR_DATA_LEN_RANGE                    = -0x00000021
const CKR_DEVICE_ERROR                      = -0x00000030
const CKR_DEVICE_MEMORY                     = -0x00000031
const CKR_DEVICE_REMOVED                    = -0x00000032
const CKR_ENCRYPTED_DATA_INVALID            = -0x00000040
const CKR_ENCRYPTED_DATA_LEN_RANGE          = -0x00000041
const CKR_FUNCTION_CANCELED                 = -0x00000050
const CKR_FUNCTION_NOT_PARALLEL             = -0x00000051
const CKR_FUNCTION_NOT_SUPPORTED            = -0x00000054
const CKR_KEY_HANDLE_INVALID                = -0x00000060
const CKR_KEY_SIZE_RANGE                    = -0x00000062
const CKR_KEY_TYPE_INCONSISTENT             = -0x00000063
const CKR_KEY_NOT_NEEDED                    = -0x00000064
const CKR_KEY_CHANGED                       = -0x00000065
const CKR_KEY_NEEDED                        = -0x00000066
const CKR_KEY_INDIGESTIBLE                  = -0x00000067
const CKR_KEY_FUNCTION_NOT_PERMITTED        = -0x00000068
const CKR_KEY_NOT_WRAPPABLE                 = -0x00000069
const CKR_KEY_UNEXTRACTABLE                 = -0x0000006A
const CKR_MECHANISM_INVALID                 = -0x00000070
const CKR_MECHANISM_PARAM_INVALID           = -0x00000071
const CKR_OBJECT_HANDLE_INVALID             = -0x00000082
const CKR_OPERATION_ACTIVE                  = -0x00000090
const CKR_OPERATION_NOT_INITIALIZED         = -0x00000091
const CKR_PIN_INCORRECT                     = -0x000000A0
const CKR_PIN_INVALID                       = -0x000000A1
const CKR_PIN_LEN_RANGE                     = -0x000000A2
const CKR_PIN_EXPIRED                       = -0x000000A3
const CKR_PIN_LOCKED                        = -0x000000A4
const CKR_SESSION_CLOSED                    = -0x000000B0
const CKR_SESSION_COUNT                     = -0x000000B1
const CKR_SESSION_HANDLE_INVALID            = -0x000000B3
const CKR_SESSION_PARALLEL_NOT_SUPPORTED    = -0x000000B4
const CKR_SESSION_READ_ONLY                 = -0x000000B5
const CKR_SESSION_EXISTS                    = -0x000000B6
const CKR_SESSION_READ_ONLY_EXISTS          = -0x000000B7
const CKR_SESSION_READ_WRITE_SO_EXISTS      = -0x000000B8
const CKR_SIGNATURE_INVALID                 = -0x000000C0
const CKR_SIGNATURE_LEN_RANGE               = -0x000000C1
const CKR_TEMPLATE_INCOMPLETE               = -0x000000D0
const CKR_TEMPLATE_INCONSISTENT             = -0x000000D1
const CKR_TOKEN_NOT_PRESENT                 = -0x000000E0
const CKR_TOKEN_NOT_RECOGNIZED              = -0x000000E1
const CKR_TOKEN_WRITE_PROTECTED             = -0x000000E2
const CKR_UNWRAPPING_KEY_HANDLE_INVALID     = -0x000000F0
const CKR_UNWRAPPING_KEY_SIZE_RANGE         = -0x000000F1
const CKR_UNWRAPPING_KEY_TYPE_INCONSISTENT  = -0x000000F2
const CKR_USER_ALREADY_LOGGED_IN            = -0x00000100
const CKR_USER_NOT_LOGGED_IN                = -0x00000101
const CKR_USER_PIN_NOT_INITIALIZED          = -0x00000102
const CKR_USER_TYPE_INVALID                 = -0x00000103
const CKR_USER_ANOTHER_ALREADY_LOGGED_IN    = -0x00000104
const CKR_USER_TOO_MANY_TYPES               = -0x00000105
const CKR_WRAPPED_KEY_INVALID               = -0x00000110
const CKR_WRAPPED_KEY_LEN_RANGE             = -0x00000112
const CKR_WRAPPING_KEY_HANDLE_INVALID       = -0x00000113
const CKR_WRAPPING_KEY_SIZE_RANGE           = -0x00000114
const CKR_WRAPPING_KEY_TYPE_INCONSISTENT    = -0x00000115
const CKR_RANDOM_SEED_NOT_SUPPORTED         = -0x00000120
const CKR_RANDOM_NO_RNG                     = -0x00000121
const CKR_DOMAIN_PARAMS_INVALID             = -0x00000130
const CKR_BUFFER_TOO_SMALL                  = -0x00000150
const CKR_SAVED_STATE_INVALID               = -0x00000160
const CKR_INFORMATION_SENSITIVE             = -0x00000170
const CKR_STATE_UNSAVEABLE                  = -0x00000180
const CKR_CRYPTOKI_NOT_INITIALIZED          = -0x00000190
const CKR_CRYPTOKI_ALREADY_INITIALIZED      = -0x00000191
const CKR_MUTEX_BAD                         = -0x000001A0
const CKR_MUTEX_NOT_LOCKED                  = -0x000001A1
const CKR_NEW_PIN_MODE                      = -0x000001B0
const CKR_NEXT_OTP                          = -0x000001B1
const CKR_FUNCTION_REJECTED                 = -0x00000200
const CKR_VENDOR_DEFINED                    = -0x80000000

// CK_MECHANISM_TYPE
var CKM = Array();

CKM[0x00000000] = "CKM_RSA_PKCS_KEY_PAIR_GEN";
CKM[0x00000001] = "CKM_RSA_PKCS";
CKM[0x00000002] = "CKM_RSA_9796";
CKM[0x00000003] = "CKM_RSA_X_509";
CKM[0x00000004] = "CKM_MD2_RSA_PKCS";
CKM[0x00000005] = "CKM_MD5_RSA_PKCS";
CKM[0x00000006] = "CKM_SHA1_RSA_PKCS";
CKM[0x00000007] = "CKM_RIPEMD128_RSA_PKCS";
CKM[0x00000008] = "CKM_RIPEMD160_RSA_PKCS";
CKM[0x00000009] = "CKM_RSA_PKCS_OAEP";
CKM[0x0000000A] = "CKM_RSA_X9_31_KEY_PAIR_GEN";
CKM[0x0000000B] = "CKM_RSA_X9_31";
CKM[0x0000000C] = "CKM_SHA1_RSA_X9_31";
CKM[0x0000000D] = "CKM_RSA_PKCS_PSS";
CKM[0x0000000E] = "CKM_SHA1_RSA_PKCS_PSS";
CKM[0x00000010] = "CKM_DSA_KEY_PAIR_GEN";
CKM[0x00000011] = "CKM_DSA";
CKM[0x00000012] = "CKM_DSA_SHA1";
CKM[0x00000020] = "CKM_DH_PKCS_KEY_PAIR_GEN";
CKM[0x00000021] = "CKM_DH_PKCS_DERIVE";
CKM[0x00000030] = "CKM_X9_42_DH_KEY_PAIR_GEN";
CKM[0x00000031] = "CKM_X9_42_DH_DERIVE";
CKM[0x00000032] = "CKM_X9_42_DH_HYBRID_DERIVE";
CKM[0x00000033] = "CKM_X9_42_MQV_DERIVE";
CKM[0x00000040] = "CKM_SHA256_RSA_PKCS";
CKM[0x00000041] = "CKM_SHA384_RSA_PKCS";
CKM[0x00000042] = "CKM_SHA512_RSA_PKCS";
CKM[0x00000043] = "CKM_SHA256_RSA_PKCS_PSS";
CKM[0x00000044] = "CKM_SHA384_RSA_PKCS_PSS";
CKM[0x00000045] = "CKM_SHA512_RSA_PKCS_PSS";
CKM[0x00000046] = "CKM_SHA224_RSA_PKCS";
CKM[0x00000047] = "CKM_SHA224_RSA_PKCS_PSS";
CKM[0x00000100] = "CKM_RC2_KEY_GEN";
CKM[0x00000101] = "CKM_RC2_ECB";
CKM[0x00000102] = "CKM_RC2_CBC";
CKM[0x00000103] = "CKM_RC2_MAC";
CKM[0x00000104] = "CKM_RC2_MAC_GENERAL";
CKM[0x00000105] = "CKM_RC2_CBC_PAD";
CKM[0x00000110] = "CKM_RC4_KEY_GEN";
CKM[0x00000111] = "CKM_RC4";
CKM[0x00000120] = "CKM_DES_KEY_GEN";
CKM[0x00000121] = "CKM_DES_ECB";
CKM[0x00000122] = "CKM_DES_CBC";
CKM[0x00000123] = "CKM_DES_MAC";
CKM[0x00000124] = "CKM_DES_MAC_GENERAL";
CKM[0x00000125] = "CKM_DES_CBC_PAD";
CKM[0x00000130] = "CKM_DES2_KEY_GEN";
CKM[0x00000131] = "CKM_DES3_KEY_GEN";
CKM[0x00000132] = "CKM_DES3_ECB";
CKM[0x00000133] = "CKM_DES3_CBC";
CKM[0x00000134] = "CKM_DES3_MAC";
CKM[0x00000135] = "CKM_DES3_MAC_GENERAL";
CKM[0x00000136] = "CKM_DES3_CBC_PAD";
CKM[0x00000140] = "CKM_CDMF_KEY_GEN";
CKM[0x00000141] = "CKM_CDMF_ECB";
CKM[0x00000142] = "CKM_CDMF_CBC";
CKM[0x00000143] = "CKM_CDMF_MAC";
CKM[0x00000144] = "CKM_CDMF_MAC_GENERAL";
CKM[0x00000145] = "CKM_CDMF_CBC_PAD";
CKM[0x00000150] = "CKM_DES_OFB64";
CKM[0x00000151] = "CKM_DES_OFB8";
CKM[0x00000152] = "CKM_DES_CFB64";
CKM[0x00000153] = "CKM_DES_CFB8";
CKM[0x00000200] = "CKM_MD2";
CKM[0x00000201] = "CKM_MD2_HMAC";
CKM[0x00000202] = "CKM_MD2_HMAC_GENERAL";
CKM[0x00000210] = "CKM_MD5";
CKM[0x00000211] = "CKM_MD5_HMAC";
CKM[0x00000212] = "CKM_MD5_HMAC_GENERAL";
CKM[0x00000220] = "CKM_SHA_1";
CKM[0x00000221] = "CKM_SHA_1_HMAC";
CKM[0x00000222] = "CKM_SHA_1_HMAC_GENERAL";
CKM[0x00000230] = "CKM_RIPEMD128";
CKM[0x00000231] = "CKM_RIPEMD128_HMAC";
CKM[0x00000232] = "CKM_RIPEMD128_HMAC_GENERAL";
CKM[0x00000240] = "CKM_RIPEMD160";
CKM[0x00000241] = "CKM_RIPEMD160_HMAC";
CKM[0x00000242] = "CKM_RIPEMD160_HMAC_GENERAL";
CKM[0x00000250] = "CKM_SHA256";
CKM[0x00000251] = "CKM_SHA256_HMAC";
CKM[0x00000252] = "CKM_SHA256_HMAC_GENERAL";
CKM[0x00000255] = "CKM_SHA224";
CKM[0x00000256] = "CKM_SHA224_HMAC";
CKM[0x00000257] = "CKM_SHA224_HMAC_GENERAL";
CKM[0x00000260] = "CKM_SHA384";
CKM[0x00000261] = "CKM_SHA384_HMAC";
CKM[0x00000262] = "CKM_SHA384_HMAC_GENERAL";
CKM[0x00000270] = "CKM_SHA512";
CKM[0x00000271] = "CKM_SHA512_HMAC";
CKM[0x00000272] = "CKM_SHA512_HMAC_GENERAL";
CKM[0x00000280] = "CKM_SECURID_KEY_GEN";
CKM[0x00000282] = "CKM_SECURID";
CKM[0x00000290] = "CKM_HOTP_KEY_GEN";
CKM[0x00000291] = "CKM_HOTP";
CKM[0x000002A0] = "CKM_ACTI";
CKM[0x000002A1] = "CKM_ACTI_KEY_GEN";
CKM[0x00000300] = "CKM_CAST_KEY_GEN";
CKM[0x00000301] = "CKM_CAST_ECB";
CKM[0x00000302] = "CKM_CAST_CBC";
CKM[0x00000303] = "CKM_CAST_MAC";
CKM[0x00000304] = "CKM_CAST_MAC_GENERAL";
CKM[0x00000305] = "CKM_CAST_CBC_PAD";
CKM[0x00000310] = "CKM_CAST3_KEY_GEN";
CKM[0x00000311] = "CKM_CAST3_ECB";
CKM[0x00000312] = "CKM_CAST3_CBC";
CKM[0x00000313] = "CKM_CAST3_MAC";
CKM[0x00000314] = "CKM_CAST3_MAC_GENERAL";
CKM[0x00000315] = "CKM_CAST3_CBC_PAD";
CKM[0x00000320] = "CKM_CAST5_KEY_GEN";
CKM[0x00000320] = "CKM_CAST128_KEY_GEN";
CKM[0x00000321] = "CKM_CAST5_ECB";
CKM[0x00000321] = "CKM_CAST128_ECB";
CKM[0x00000322] = "CKM_CAST5_CBC";
CKM[0x00000322] = "CKM_CAST128_CBC";
CKM[0x00000323] = "CKM_CAST5_MAC";
CKM[0x00000323] = "CKM_CAST128_MAC";
CKM[0x00000324] = "CKM_CAST5_MAC_GENERAL";
CKM[0x00000324] = "CKM_CAST128_MAC_GENERAL";
CKM[0x00000325] = "CKM_CAST5_CBC_PAD";
CKM[0x00000325] = "CKM_CAST128_CBC_PAD";
CKM[0x00000330] = "CKM_RC5_KEY_GEN";
CKM[0x00000331] = "CKM_RC5_ECB";
CKM[0x00000332] = "CKM_RC5_CBC";
CKM[0x00000333] = "CKM_RC5_MAC";
CKM[0x00000334] = "CKM_RC5_MAC_GENERAL";
CKM[0x00000335] = "CKM_RC5_CBC_PAD";
CKM[0x00000340] = "CKM_IDEA_KEY_GEN";
CKM[0x00000341] = "CKM_IDEA_ECB";
CKM[0x00000342] = "CKM_IDEA_CBC";
CKM[0x00000343] = "CKM_IDEA_MAC";
CKM[0x00000344] = "CKM_IDEA_MAC_GENERAL";
CKM[0x00000345] = "CKM_IDEA_CBC_PAD";
CKM[0x00000350] = "CKM_GENERIC_SECRET_KEY_GEN";
CKM[0x00000360] = "CKM_CONCATENATE_BASE_AND_KEY";
CKM[0x00000362] = "CKM_CONCATENATE_BASE_AND_DATA";
CKM[0x00000363] = "CKM_CONCATENATE_DATA_AND_BASE";
CKM[0x00000364] = "CKM_XOR_BASE_AND_DATA";
CKM[0x00000365] = "CKM_EXTRACT_KEY_FROM_KEY";
CKM[0x00000370] = "CKM_SSL3_PRE_MASTER_KEY_GEN";
CKM[0x00000371] = "CKM_SSL3_MASTER_KEY_DERIVE";
CKM[0x00000372] = "CKM_SSL3_KEY_AND_MAC_DERIVE";
CKM[0x00000373] = "CKM_SSL3_MASTER_KEY_DERIVE_DH";
CKM[0x00000374] = "CKM_TLS_PRE_MASTER_KEY_GEN";
CKM[0x00000375] = "CKM_TLS_MASTER_KEY_DERIVE";
CKM[0x00000376] = "CKM_TLS_KEY_AND_MAC_DERIVE";
CKM[0x00000377] = "CKM_TLS_MASTER_KEY_DERIVE_DH";
CKM[0x00000378] = "CKM_TLS_PRF";
CKM[0x00000380] = "CKM_SSL3_MD5_MAC";
CKM[0x00000381] = "CKM_SSL3_SHA1_MAC";
CKM[0x00000390] = "CKM_MD5_KEY_DERIVATION";
CKM[0x00000391] = "CKM_MD2_KEY_DERIVATION";
CKM[0x00000392] = "CKM_SHA1_KEY_DERIVATION";
CKM[0x00000393] = "CKM_SHA256_KEY_DERIVATION";
CKM[0x00000394] = "CKM_SHA384_KEY_DERIVATION";
CKM[0x00000395] = "CKM_SHA512_KEY_DERIVATION";
CKM[0x00000396] = "CKM_SHA224_KEY_DERIVATION";
CKM[0x000003A0] = "CKM_PBE_MD2_DES_CBC";
CKM[0x000003A1] = "CKM_PBE_MD5_DES_CBC";
CKM[0x000003A2] = "CKM_PBE_MD5_CAST_CBC";
CKM[0x000003A3] = "CKM_PBE_MD5_CAST3_CBC";
CKM[0x000003A4] = "CKM_PBE_MD5_CAST5_CBC";
CKM[0x000003A4] = "CKM_PBE_MD5_CAST128_CBC";
CKM[0x000003A5] = "CKM_PBE_SHA1_CAST5_CBC";
CKM[0x000003A5] = "CKM_PBE_SHA1_CAST128_CBC";
CKM[0x000003A6] = "CKM_PBE_SHA1_RC4_128";
CKM[0x000003A7] = "CKM_PBE_SHA1_RC4_40";
CKM[0x000003A8] = "CKM_PBE_SHA1_DES3_EDE_CBC";
CKM[0x000003A9] = "CKM_PBE_SHA1_DES2_EDE_CBC";
CKM[0x000003AA] = "CKM_PBE_SHA1_RC2_128_CBC";
CKM[0x000003AB] = "CKM_PBE_SHA1_RC2_40_CBC";
CKM[0x000003B0] = "CKM_PKCS5_PBKD2";
CKM[0x000003C0] = "CKM_PBA_SHA1_WITH_SHA1_HMAC";
CKM[0x000003D0] = "CKM_WTLS_PRE_MASTER_KEY_GEN";
CKM[0x000003D1] = "CKM_WTLS_MASTER_KEY_DERIVE";
CKM[0x000003D2] = "CKM_WTLS_MASTER_KEY_DERIVE_DH_ECC";
CKM[0x000003D3] = "CKM_WTLS_PRF";
CKM[0x000003D4] = "CKM_WTLS_SERVER_KEY_AND_MAC_DERIVE";
CKM[0x000003D5] = "CKM_WTLS_CLIENT_KEY_AND_MAC_DERIVE";
CKM[0x00000400] = "CKM_KEY_WRAP_LYNKS";
CKM[0x00000401] = "CKM_KEY_WRAP_SET_OAEP";
CKM[0x00000500] = "CKM_CMS_SIG";
CKM[0x00000510] = "CKM_KIP_DERIVE";
CKM[0x00000511] = "CKM_KIP_WRAP";
CKM[0x00000512] = "CKM_KIP_MAC";
CKM[0x00000550] = "CKM_CAMELLIA_KEY_GEN";
CKM[0x00000551] = "CKM_CAMELLIA_ECB";
CKM[0x00000552] = "CKM_CAMELLIA_CBC";
CKM[0x00000553] = "CKM_CAMELLIA_MAC";
CKM[0x00000554] = "CKM_CAMELLIA_MAC_GENERAL";
CKM[0x00000555] = "CKM_CAMELLIA_CBC_PAD";
CKM[0x00000556] = "CKM_CAMELLIA_ECB_ENCRYPT_DATA";
CKM[0x00000557] = "CKM_CAMELLIA_CBC_ENCRYPT_DATA";
CKM[0x00000558] = "CKM_CAMELLIA_CTR";
CKM[0x00000560] = "CKM_ARIA_KEY_GEN";
CKM[0x00000561] = "CKM_ARIA_ECB";
CKM[0x00000562] = "CKM_ARIA_CBC";
CKM[0x00000563] = "CKM_ARIA_MAC";
CKM[0x00000564] = "CKM_ARIA_MAC_GENERAL";
CKM[0x00000565] = "CKM_ARIA_CBC_PAD";
CKM[0x00000566] = "CKM_ARIA_ECB_ENCRYPT_DATA";
CKM[0x00000567] = "CKM_ARIA_CBC_ENCRYPT_DATA";
CKM[0x00001000] = "CKM_SKIPJACK_KEY_GEN";
CKM[0x00001001] = "CKM_SKIPJACK_ECB64";
CKM[0x00001002] = "CKM_SKIPJACK_CBC64";
CKM[0x00001003] = "CKM_SKIPJACK_OFB64";
CKM[0x00001004] = "CKM_SKIPJACK_CFB64";
CKM[0x00001005] = "CKM_SKIPJACK_CFB32";
CKM[0x00001006] = "CKM_SKIPJACK_CFB16";
CKM[0x00001007] = "CKM_SKIPJACK_CFB8";
CKM[0x00001008] = "CKM_SKIPJACK_WRAP";
CKM[0x00001009] = "CKM_SKIPJACK_PRIVATE_WRAP";
CKM[0x0000100a] = "CKM_SKIPJACK_RELAYX";
CKM[0x00001010] = "CKM_KEA_KEY_PAIR_GEN";
CKM[0x00001011] = "CKM_KEA_KEY_DERIVE";
CKM[0x00001020] = "CKM_FORTEZZA_TIMESTAMP";
CKM[0x00001030] = "CKM_BATON_KEY_GEN";
CKM[0x00001031] = "CKM_BATON_ECB128";
CKM[0x00001032] = "CKM_BATON_ECB96";
CKM[0x00001033] = "CKM_BATON_CBC128";
CKM[0x00001034] = "CKM_BATON_COUNTER";
CKM[0x00001035] = "CKM_BATON_SHUFFLE";
CKM[0x00001036] = "CKM_BATON_WRAP";
CKM[0x00001040] = "CKM_ECDSA_KEY_PAIR_GEN";
CKM[0x00001040] = "CKM_EC_KEY_PAIR_GEN";
CKM[0x00001041] = "CKM_ECDSA";
CKM[0x00001042] = "CKM_ECDSA_SHA1";
CKM[0x00001050] = "CKM_ECDH1_DERIVE";
CKM[0x00001051] = "CKM_ECDH1_COFACTOR_DERIVE";
CKM[0x00001052] = "CKM_ECMQV_DERIVE";
CKM[0x00001060] = "CKM_JUNIPER_KEY_GEN";
CKM[0x00001061] = "CKM_JUNIPER_ECB128";
CKM[0x00001062] = "CKM_JUNIPER_CBC128";
CKM[0x00001063] = "CKM_JUNIPER_COUNTER";
CKM[0x00001064] = "CKM_JUNIPER_SHUFFLE";
CKM[0x00001065] = "CKM_JUNIPER_WRAP";
CKM[0x00001070] = "CKM_FASTHASH";
CKM[0x00001080] = "CKM_AES_KEY_GEN";
CKM[0x00001081] = "CKM_AES_ECB";
CKM[0x00001082] = "CKM_AES_CBC";
CKM[0x00001083] = "CKM_AES_MAC";
CKM[0x00001084] = "CKM_AES_MAC_GENERAL";
CKM[0x00001085] = "CKM_AES_CBC_PAD";
CKM[0x00001086] = "CKM_AES_CTR";
CKM[0x00001090] = "CKM_BLOWFISH_KEY_GEN";
CKM[0x00001091] = "CKM_BLOWFISH_CBC";
CKM[0x00001092] = "CKM_TWOFISH_KEY_GEN";
CKM[0x00001093] = "CKM_TWOFISH_CBC";
CKM[0x00001100] = "CKM_DES_ECB_ENCRYPT_DATA";
CKM[0x00001101] = "CKM_DES_CBC_ENCRYPT_DATA";
CKM[0x00001102] = "CKM_DES3_ECB_ENCRYPT_DATA";
CKM[0x00001103] = "CKM_DES3_CBC_ENCRYPT_DATA";
CKM[0x00001104] = "CKM_AES_ECB_ENCRYPT_DATA";
CKM[0x00001105] = "CKM_AES_CBC_ENCRYPT_DATA";
/* GOST MECHANISMS */
CKM[0x00001200] = "CKM_GOSTR3410_KEY_PAIR_GEN";
CKM[0x00001201] = "CKM_GOSTR3410";
CKM[0x00001202] = "CKM_GOSTR3410_WITH_GOSTR3411";
CKM[0x00001203] = "CKM_GOSTR3410_KEY_WRAP";
CKM[0x00001204] = "CKM_GOSTR3410_DERIVE";
CKM[0x00001210] = "CKM_GOSTR3411";
CKM[0x00001211] = "CKM_GOSTR3411_HMAC";
CKM[0x00001220] = "CKM_GOST28147_KEY_GEN";
CKM[0x00001221] = "CKM_GOST28147_ECB";
CKM[0x00001222] = "CKM_GOST28147";
CKM[0x00001223] = "CKM_GOST28147_MAC";
CKM[0x00001224] = "CKM_GOST28147_KEY_WRAP";
/* // GOST MECHANISMS */
CKM[0x00002000] = "CKM_DSA_PARAMETER_GEN";
CKM[0x00002001] = "CKM_DH_PKCS_PARAMETER_GEN";
CKM[0x00002002] = "CKM_X9_42_DH_PARAMETER_GEN";
CKM[0x80000000] = "CKM_VENDOR_DEFINED";

const CKM_RSA_PKCS_KEY_PAIR_GEN     = 0x00000000
const CKM_RSA_PKCS                  = 0x00000001
const CKM_RSA_9796                  = 0x00000002
const CKM_RSA_X_509                 = 0x00000003
const CKM_MD2_RSA_PKCS              = 0x00000004
const CKM_MD5_RSA_PKCS              = 0x00000005
const CKM_SHA1_RSA_PKCS             = 0x00000006
const CKM_RIPEMD128_RSA_PKCS        = 0x00000007
const CKM_RIPEMD160_RSA_PKCS        = 0x00000008
const CKM_RSA_PKCS_OAEP             = 0x00000009
const CKM_RSA_X9_31_KEY_PAIR_GEN    = 0x0000000A
const CKM_RSA_X9_31                 = 0x0000000B
const CKM_SHA1_RSA_X9_31            = 0x0000000C
const CKM_RSA_PKCS_PSS              = 0x0000000D
const CKM_SHA1_RSA_PKCS_PSS         = 0x0000000E
const CKM_DSA_KEY_PAIR_GEN          = 0x00000010
const CKM_DSA                       = 0x00000011
const CKM_DSA_SHA1                  = 0x00000012
const CKM_DH_PKCS_KEY_PAIR_GEN      = 0x00000020
const CKM_DH_PKCS_DERIVE            = 0x00000021
const CKM_X9_42_DH_KEY_PAIR_GEN     = 0x00000030
const CKM_X9_42_DH_DERIVE           = 0x00000031
const CKM_X9_42_DH_HYBRID_DERIVE    = 0x00000032
const CKM_X9_42_MQV_DERIVE          = 0x00000033
const CKM_SHA256_RSA_PKCS           = 0x00000040
const CKM_SHA384_RSA_PKCS           = 0x00000041
const CKM_SHA512_RSA_PKCS           = 0x00000042
const CKM_SHA256_RSA_PKCS_PSS       = 0x00000043
const CKM_SHA384_RSA_PKCS_PSS       = 0x00000044
const CKM_SHA512_RSA_PKCS_PSS       = 0x00000045
const CKM_SHA224_RSA_PKCS           = 0x00000046
const CKM_SHA224_RSA_PKCS_PSS       = 0x00000047
const CKM_RC2_KEY_GEN               = 0x00000100
const CKM_RC2_ECB                   = 0x00000101
const CKM_RC2_CBC                   = 0x00000102
const CKM_RC2_MAC                   = 0x00000103
const CKM_RC2_MAC_GENERAL           = 0x00000104
const CKM_RC2_CBC_PAD               = 0x00000105
const CKM_RC4_KEY_GEN               = 0x00000110
const CKM_RC4                       = 0x00000111
const CKM_DES_KEY_GEN               = 0x00000120
const CKM_DES_ECB                   = 0x00000121
const CKM_DES_CBC                   = 0x00000122
const CKM_DES_MAC                   = 0x00000123
const CKM_DES_MAC_GENERAL           = 0x00000124
const CKM_DES_CBC_PAD               = 0x00000125
const CKM_DES2_KEY_GEN              = 0x00000130
const CKM_DES3_KEY_GEN              = 0x00000131
const CKM_DES3_ECB                  = 0x00000132
const CKM_DES3_CBC                  = 0x00000133
const CKM_DES3_MAC                  = 0x00000134
const CKM_DES3_MAC_GENERAL          = 0x00000135
const CKM_DES3_CBC_PAD              = 0x00000136
const CKM_CDMF_KEY_GEN              = 0x00000140
const CKM_CDMF_ECB                  = 0x00000141
const CKM_CDMF_CBC                  = 0x00000142
const CKM_CDMF_MAC                  = 0x00000143
const CKM_CDMF_MAC_GENERAL          = 0x00000144
const CKM_CDMF_CBC_PAD              = 0x00000145
const CKM_DES_OFB64                 = 0x00000150
const CKM_DES_OFB8                  = 0x00000151
const CKM_DES_CFB64                 = 0x00000152
const CKM_DES_CFB8                  = 0x00000153
const CKM_MD2                       = 0x00000200
const CKM_MD2_HMAC                  = 0x00000201
const CKM_MD2_HMAC_GENERAL          = 0x00000202
const CKM_MD5                       = 0x00000210
const CKM_MD5_HMAC                  = 0x00000211
const CKM_MD5_HMAC_GENERAL          = 0x00000212
const CKM_SHA_1                     = 0x00000220
const CKM_SHA_1_HMAC                = 0x00000221
const CKM_SHA_1_HMAC_GENERAL        = 0x00000222
const CKM_RIPEMD128                 = 0x00000230
const CKM_RIPEMD128_HMAC            = 0x00000231
const CKM_RIPEMD128_HMAC_GENERAL    = 0x00000232
const CKM_RIPEMD160                 = 0x00000240
const CKM_RIPEMD160_HMAC            = 0x00000241
const CKM_RIPEMD160_HMAC_GENERAL    = 0x00000242
const CKM_SHA256                    = 0x00000250
const CKM_SHA256_HMAC               = 0x00000251
const CKM_SHA256_HMAC_GENERAL       = 0x00000252
const CKM_SHA224                    = 0x00000255
const CKM_SHA224_HMAC               = 0x00000256
const CKM_SHA224_HMAC_GENERAL       = 0x00000257
const CKM_SHA384                    = 0x00000260
const CKM_SHA384_HMAC               = 0x00000261
const CKM_SHA384_HMAC_GENERAL       = 0x00000262
const CKM_SHA512                    = 0x00000270
const CKM_SHA512_HMAC               = 0x00000271
const CKM_SHA512_HMAC_GENERAL       = 0x00000272
const CKM_SECURID_KEY_GEN           = 0x00000280
const CKM_SECURID                   = 0x00000282
const CKM_HOTP_KEY_GEN              = 0x00000290
const CKM_HOTP                      = 0x00000291
const CKM_ACTI                      = 0x000002A0
const CKM_ACTI_KEY_GEN              = 0x000002A1
const CKM_CAST_KEY_GEN              = 0x00000300
const CKM_CAST_ECB                  = 0x00000301
const CKM_CAST_CBC                  = 0x00000302
const CKM_CAST_MAC                  = 0x00000303
const CKM_CAST_MAC_GENERAL          = 0x00000304
const CKM_CAST_CBC_PAD              = 0x00000305
const CKM_CAST3_KEY_GEN             = 0x00000310
const CKM_CAST3_ECB                 = 0x00000311
const CKM_CAST3_CBC                 = 0x00000312
const CKM_CAST3_MAC                 = 0x00000313
const CKM_CAST3_MAC_GENERAL         = 0x00000314
const CKM_CAST3_CBC_PAD             = 0x00000315
const CKM_CAST5_KEY_GEN             = 0x00000320
const CKM_CAST128_KEY_GEN           = 0x00000320
const CKM_CAST5_ECB                 = 0x00000321
const CKM_CAST128_ECB               = 0x00000321
const CKM_CAST5_CBC                 = 0x00000322
const CKM_CAST128_CBC               = 0x00000322
const CKM_CAST5_MAC                 = 0x00000323
const CKM_CAST128_MAC               = 0x00000323
const CKM_CAST5_MAC_GENERAL         = 0x00000324
const CKM_CAST128_MAC_GENERAL       = 0x00000324
const CKM_CAST5_CBC_PAD             = 0x00000325
const CKM_CAST128_CBC_PAD           = 0x00000325
const CKM_RC5_KEY_GEN               = 0x00000330
const CKM_RC5_ECB                   = 0x00000331
const CKM_RC5_CBC                   = 0x00000332
const CKM_RC5_MAC                   = 0x00000333
const CKM_RC5_MAC_GENERAL           = 0x00000334
const CKM_RC5_CBC_PAD               = 0x00000335
const CKM_IDEA_KEY_GEN              = 0x00000340
const CKM_IDEA_ECB                  = 0x00000341
const CKM_IDEA_CBC                  = 0x00000342
const CKM_IDEA_MAC                  = 0x00000343
const CKM_IDEA_MAC_GENERAL          = 0x00000344
const CKM_IDEA_CBC_PAD              = 0x00000345
const CKM_GENERIC_SECRET_KEY_GEN    = 0x00000350
const CKM_CONCATENATE_BASE_AND_KEY  = 0x00000360
const CKM_CONCATENATE_BASE_AND_DATA = 0x00000362
const CKM_CONCATENATE_DATA_AND_BASE = 0x00000363
const CKM_XOR_BASE_AND_DATA         = 0x00000364
const CKM_EXTRACT_KEY_FROM_KEY      = 0x00000365
const CKM_SSL3_PRE_MASTER_KEY_GEN   = 0x00000370
const CKM_SSL3_MASTER_KEY_DERIVE    = 0x00000371
const CKM_SSL3_KEY_AND_MAC_DERIVE   = 0x00000372
const CKM_SSL3_MASTER_KEY_DERIVE_DH = 0x00000373
const CKM_TLS_PRE_MASTER_KEY_GEN    = 0x00000374
const CKM_TLS_MASTER_KEY_DERIVE     = 0x00000375
const CKM_TLS_KEY_AND_MAC_DERIVE    = 0x00000376
const CKM_TLS_MASTER_KEY_DERIVE_DH  = 0x00000377
const CKM_TLS_PRF                   = 0x00000378
const CKM_SSL3_MD5_MAC              = 0x00000380
const CKM_SSL3_SHA1_MAC             = 0x00000381
const CKM_MD5_KEY_DERIVATION        = 0x00000390
const CKM_MD2_KEY_DERIVATION        = 0x00000391
const CKM_SHA1_KEY_DERIVATION       = 0x00000392
const CKM_SHA256_KEY_DERIVATION     = 0x00000393
const CKM_SHA384_KEY_DERIVATION     = 0x00000394
const CKM_SHA512_KEY_DERIVATION     = 0x00000395
const CKM_SHA224_KEY_DERIVATION     = 0x00000396
const CKM_PBE_MD2_DES_CBC           = 0x000003A0
const CKM_PBE_MD5_DES_CBC           = 0x000003A1
const CKM_PBE_MD5_CAST_CBC          = 0x000003A2
const CKM_PBE_MD5_CAST3_CBC         = 0x000003A3
const CKM_PBE_MD5_CAST5_CBC         = 0x000003A4
const CKM_PBE_MD5_CAST128_CBC       = 0x000003A4
const CKM_PBE_SHA1_CAST5_CBC        = 0x000003A5
const CKM_PBE_SHA1_CAST128_CBC      = 0x000003A5
const CKM_PBE_SHA1_RC4_128          = 0x000003A6
const CKM_PBE_SHA1_RC4_40           = 0x000003A7
const CKM_PBE_SHA1_DES3_EDE_CBC     = 0x000003A8
const CKM_PBE_SHA1_DES2_EDE_CBC     = 0x000003A9
const CKM_PBE_SHA1_RC2_128_CBC      = 0x000003AA
const CKM_PBE_SHA1_RC2_40_CBC       = 0x000003AB
const CKM_PKCS5_PBKD2               = 0x000003B0
const CKM_PBA_SHA1_WITH_SHA1_HMAC   = 0x000003C0
const CKM_WTLS_PRE_MASTER_KEY_GEN        = 0x000003D0
const CKM_WTLS_MASTER_KEY_DERIVE         = 0x000003D1
const CKM_WTLS_MASTER_KEY_DERIVE_DH_ECC  = 0x000003D2
const CKM_WTLS_PRF                       = 0x000003D3
const CKM_WTLS_SERVER_KEY_AND_MAC_DERIVE = 0x000003D4
const CKM_WTLS_CLIENT_KEY_AND_MAC_DERIVE = 0x000003D5
const CKM_KEY_WRAP_LYNKS            = 0x00000400
const CKM_KEY_WRAP_SET_OAEP         = 0x00000401
const CKM_CMS_SIG                   = 0x00000500
const CKM_KIP_DERIVE	            = 0x00000510
const CKM_KIP_WRAP	                = 0x00000511
const CKM_KIP_MAC                   = 0x00000512
const CKM_CAMELLIA_KEY_GEN          = 0x00000550
const CKM_CAMELLIA_ECB              = 0x00000551
const CKM_CAMELLIA_CBC              = 0x00000552
const CKM_CAMELLIA_MAC              = 0x00000553
const CKM_CAMELLIA_MAC_GENERAL      = 0x00000554
const CKM_CAMELLIA_CBC_PAD          = 0x00000555
const CKM_CAMELLIA_ECB_ENCRYPT_DATA = 0x00000556
const CKM_CAMELLIA_CBC_ENCRYPT_DATA = 0x00000557
const CKM_CAMELLIA_CTR              = 0x00000558
const CKM_ARIA_KEY_GEN              = 0x00000560
const CKM_ARIA_ECB                  = 0x00000561
const CKM_ARIA_CBC                  = 0x00000562
const CKM_ARIA_MAC                  = 0x00000563
const CKM_ARIA_MAC_GENERAL          = 0x00000564
const CKM_ARIA_CBC_PAD              = 0x00000565
const CKM_ARIA_ECB_ENCRYPT_DATA     = 0x00000566
const CKM_ARIA_CBC_ENCRYPT_DATA     = 0x00000567
const CKM_SKIPJACK_KEY_GEN          = 0x00001000
const CKM_SKIPJACK_ECB64            = 0x00001001
const CKM_SKIPJACK_CBC64            = 0x00001002
const CKM_SKIPJACK_OFB64            = 0x00001003
const CKM_SKIPJACK_CFB64            = 0x00001004
const CKM_SKIPJACK_CFB32            = 0x00001005
const CKM_SKIPJACK_CFB16            = 0x00001006
const CKM_SKIPJACK_CFB8             = 0x00001007
const CKM_SKIPJACK_WRAP             = 0x00001008
const CKM_SKIPJACK_PRIVATE_WRAP     = 0x00001009
const CKM_SKIPJACK_RELAYX           = 0x0000100a
const CKM_KEA_KEY_PAIR_GEN          = 0x00001010
const CKM_KEA_KEY_DERIVE            = 0x00001011
const CKM_FORTEZZA_TIMESTAMP        = 0x00001020
const CKM_BATON_KEY_GEN             = 0x00001030
const CKM_BATON_ECB128              = 0x00001031
const CKM_BATON_ECB96               = 0x00001032
const CKM_BATON_CBC128              = 0x00001033
const CKM_BATON_COUNTER             = 0x00001034
const CKM_BATON_SHUFFLE             = 0x00001035
const CKM_BATON_WRAP                = 0x00001036
const CKM_ECDSA_KEY_PAIR_GEN        = 0x00001040
const CKM_EC_KEY_PAIR_GEN           = 0x00001040
const CKM_ECDSA                     = 0x00001041
const CKM_ECDSA_SHA1                = 0x00001042
const CKM_ECDH1_DERIVE              = 0x00001050
const CKM_ECDH1_COFACTOR_DERIVE     = 0x00001051
const CKM_ECMQV_DERIVE              = 0x00001052
const CKM_JUNIPER_KEY_GEN           = 0x00001060
const CKM_JUNIPER_ECB128            = 0x00001061
const CKM_JUNIPER_CBC128            = 0x00001062
const CKM_JUNIPER_COUNTER           = 0x00001063
const CKM_JUNIPER_SHUFFLE           = 0x00001064
const CKM_JUNIPER_WRAP              = 0x00001065
const CKM_FASTHASH                  = 0x00001070
const CKM_AES_KEY_GEN               = 0x00001080
const CKM_AES_ECB                   = 0x00001081
const CKM_AES_CBC                   = 0x00001082
const CKM_AES_MAC                   = 0x00001083
const CKM_AES_MAC_GENERAL           = 0x00001084
const CKM_AES_CBC_PAD               = 0x00001085
const CKM_AES_CTR                   = 0x00001086
const CKM_BLOWFISH_KEY_GEN          = 0x00001090
const CKM_BLOWFISH_CBC              = 0x00001091
const CKM_TWOFISH_KEY_GEN           = 0x00001092
const CKM_TWOFISH_CBC               = 0x00001093
const CKM_DES_ECB_ENCRYPT_DATA      = 0x00001100
const CKM_DES_CBC_ENCRYPT_DATA      = 0x00001101
const CKM_DES3_ECB_ENCRYPT_DATA     = 0x00001102
const CKM_DES3_CBC_ENCRYPT_DATA     = 0x00001103
const CKM_AES_ECB_ENCRYPT_DATA      = 0x00001104
const CKM_AES_CBC_ENCRYPT_DATA      = 0x00001105
/* GOST MECHANISMS */
const CKM_GOSTR3410_KEY_PAIR_GEN    = 0x00001200
const CKM_GOSTR3410                 = 0x00001201
const CKM_GOSTR3410_WITH_GOSTR3411  = 0x00001202
const CKM_GOSTR3410_KEY_WRAP        = 0x00001203
const CKM_GOSTR3410_DERIVE          = 0x00001204
const CKM_GOSTR3411                 = 0x00001210
const CKM_GOSTR3411_HMAC            = 0x00001211
const CKM_GOST28147_KEY_GEN         = 0x00001220
const CKM_GOST28147_ECB             = 0x00001221
const CKM_GOST28147                 = 0x00001222
const CKM_GOST28147_MAC             = 0x00001223
const CKM_GOST28147_KEY_WRAP        = 0x00001224
/* // GOST MECHANISMS */
const CKM_DSA_PARAMETER_GEN         = 0x00002000
const CKM_DH_PKCS_PARAMETER_GEN     = 0x00002001
const CKM_X9_42_DH_PARAMETER_GEN    = 0x00002002
const CKM_VENDOR_DEFINED            = 0x80000000
