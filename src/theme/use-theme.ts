import { useEffect, useState } from "react";
import { IThemeSchema, themes, ThemeType } from "./themes";

interface IUseTheme {
  themeSchema: IThemeSchema;
  themeLoaded: boolean;
}

export const useTheme = (themeType: ThemeType): IUseTheme => {
  const [themeSchema] = useState<IThemeSchema>(themes[themeType]);
  const [themeLoaded, setThemeLoaded] = useState(false);

  useEffect(() => {
    setThemeLoaded(true);
  }, []);

  return { themeSchema, themeLoaded };
};
