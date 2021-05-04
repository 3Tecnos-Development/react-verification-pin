import { DefaultTheme } from "styled-components";

interface IPalette {
  primary: string;
  secondary: string;
}

export interface IThemeSchema extends DefaultTheme {
  colors: {
    process: IPalette;
    success: IPalette;
    error: IPalette;
  };

  input: {
    backgroundColor: string;
    hover: {
      backgroundColor: string;
      boxShadow: string;
    };

    focus: {
      borderColor: string;
      boxShadow: string;
      backgroundColor: string;
    };
  };
}

export interface ITheme {
  easyPeasy: IThemeSchema;
}

const successPalette: IPalette = {
  primary: "#31b75e !important",
  secondary: "#e9ffef !important",
};

const errorPalette: IPalette = {
  primary: "#eb566a !important",
  secondary: "#ffedf1 !important",
};

export const themes: ITheme = {
  easyPeasy: {
    colors: {
      process: {
        primary: "#7327d5 !important",
        secondary: "#e8dcf7 !important",
      },
      success: successPalette,
      error: errorPalette,
    },
    input: {
      backgroundColor: "#f3f3f4 !important",
      hover: {
        backgroundColor: "#fff !important",
        boxShadow: "0 0 0 4px rgba(116, 40, 213, 0.1) !important",
      },

      focus: {
        borderColor: "rgb(116, 40, 213)",
        boxShadow: "0 0 0 4px rgba(116, 40, 213, 0.1) !important",
        backgroundColor: "#fff !important",
      },
    },
  },
};
