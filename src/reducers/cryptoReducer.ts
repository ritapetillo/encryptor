import {
  CRYPT_ERROR,
  CRYPT_LOADING,
  CRYPT_RESET,
  CRYPT_SUCCESS,
} from "../actions/types";
import { CryptAction, CryptDispachTypes } from "../interfaces/actions";
import { ThemeState, Theme, CryptoState } from "../interfaces/states";

const initialState: CryptoState = {
  fileName: "",
  fileURL: "",
  loading: false,
  type: "",
  key: "",
  error: "",
};

const cryptoReducer = (state = initialState, action: CryptDispachTypes) => {
  const { type, payload } = action;
  switch (type) {
    case CRYPT_SUCCESS:
      return {
        ...state,
        key: payload.key,
        fileURL: payload.fileURL,
        fileName: payload.fileName,
        loading: false,
        type: payload.type,
      };
    case CRYPT_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CRYPT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload.error,
      };
    case CRYPT_RESET:
      return {
        ...state,
        fileName: "",
        fileURL: "",
        loading: false,
        type: "",
        key: "",
        error: "",
      };
    default:
      return state;
  }
};

export default cryptoReducer;
