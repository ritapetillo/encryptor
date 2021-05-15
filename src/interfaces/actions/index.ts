import { SWITCH_THEME } from "../../actions/types";
import { Theme } from "../states";

export interface SwitchTheme {
  type: typeof SWITCH_THEME;
  payload: Theme;
}

export type ThemeDispachTypes = SwitchTheme;
