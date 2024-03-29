import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  background: {
    primary: "#3E5076",
  },
  text: {
    primary: "#3E5076",
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
