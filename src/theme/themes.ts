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
    color: string;
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
  primary: "#31b75e",
  secondary: "#e9ffef",
};

const errorPalette: IPalette = {
  primary: "#eb566a",
  secondary: "#ffedf1",
};

export const themes: ITheme = {
  easyPeasy: {
    colors: {
      process: {
        primary: "#7327d5",
        secondary: "#e8dcf7",
      },
      success: successPalette,
      error: errorPalette,
    },
    input: {
      backgroundColor: "#f3f3f4",
      color: "#4e5159 !important",
      hover: {
        backgroundColor: "#fff !important",
        boxShadow: "0 0 0 4px rgba(116, 40, 213, 0.1)",
      },

      focus: {
        borderColor: "rgb(116, 40, 213)",
        boxShadow: "0 0 0 4px rgba(116, 40, 213, 0.1)",
        backgroundColor: "#fff",
      },
    },
  },
};
