import { Theme } from "../interfaces/states";
import { ThemeDispachTypes } from "../interfaces/actions/index";
import { Dispatch } from "react";
import { SWITCH_THEME } from "./types";

export const switchTheme =
  (theme: Theme) => (dispatch: Dispatch<ThemeDispachTypes>) => {
    console.log(theme);
    dispatch({
      type: SWITCH_THEME,
      payload: theme,
    });
  };
