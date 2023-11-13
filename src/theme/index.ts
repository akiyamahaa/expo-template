import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const newColorTheme = {
  background: {
    primary: "#EFFAFF",
    secondary: "#BCEBFE",
    white: "#fff",
    grey: "rgba(226, 228, 232, 0.5)",
    lightGrey: "rgba(216, 216, 216, 0.2)",
    orange: "#FFE190",
  },
  text: {
    dark: "#3E5076",
    light: "#96A5BA",
    green: "#19EDBE",
    red: "#DA282F",
    iconLight: "#8b9ab1",
  },
};

const appTheme = extendTheme({
  colors: newColorTheme,
  fontConfig: {
    Quicksand: {
      300: {
        normal: "Quicksand_300Light",
      },
      400: {
        normal: "Quicksand_400Regular",
      },
      500: {
        normal: "Quicksand_400Regular",
      },
      600: {
        normal: "Quicksand_600SemiBold",
      },
      700: {
        normal: "Quicksand_700Bold",
      },
    },
  },
  fonts: {
    heading: "Quicksand",
    body: "Quicksand",
    mono: "Quicksand",
  },
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
