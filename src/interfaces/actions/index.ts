import {
  CRYPT_ERROR,
  CRYPT_LOADING,
  CRYPT_SUCCESS,
  SWITCH_THEME,
} from "../../actions/types";
import { Theme } from "../states";

export interface SwitchTheme {
  type: typeof SWITCH_THEME;
  payload: Theme;
}

export interface cryptPayload {
  fileURL?: string;
  loading?: boolean;
  key?: string;
  type?: string;
  fileName?: string;
  error?: string;
}
export interface CryptAction {
  type: typeof CRYPT_SUCCESS;
  payload: cryptPayload;
}

export interface CryptLoading {
  type: typeof CRYPT_LOADING;
  payload: cryptPayload;
}

export interface CryptError {
  type: typeof CRYPT_ERROR;
  payload: cryptPayload;
}

export type ThemeDispachTypes = SwitchTheme;
export type CryptDispachTypes = CryptAction | CryptLoading | CryptError;
