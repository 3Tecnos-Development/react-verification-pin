import { useEffect, useState } from "react";
import { IThemeSchema, themes } from "./themes";

interface IUseTheme {
  theme: IThemeSchema;
  themeLoaded: boolean;
}

export const useTheme = (): IUseTheme => {
  const [theme] = useState<IThemeSchema>(themes.easyPeasy);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded };
};
