import { ThemeState, Theme } from "../interfaces/states";

const initialState: ThemeState = {
  theme: Theme.light,
};

const themeReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "SWITCH_THEME":
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
