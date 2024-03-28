import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  background: {
    primary: "#3E5076",
    white: "#fff",
    grey: "rgba(226, 228, 232, 0.5)",
    lightGrey: "rgba(216, 216, 216, 0.2)",
    orange: "#FFE190",
  },
  text: {
    primary: "#3E5076",
    green: "#19EDBE",
    red: "#DA282F",
    iconLight: "#8b9ab1",
  },
};

const appTheme = extendTheme({
  colors: newColorTheme,
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
