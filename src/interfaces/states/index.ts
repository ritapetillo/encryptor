export enum Theme {
  dark = "DARK",
  light = "LIGHT",
}

export interface ThemeState {
  theme: Theme;
}

export interface CryptoState {
  fileURL?: string;
  loading?: boolean;
  key?: string;
  type?: string;
  fileName?: string;
  error?: string;
}
