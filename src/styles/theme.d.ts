import { DefaultTheme } from "styled-components";

interface ThemeInterface extends DefaultTheme {
  sidebarBackground: string;
  sidebarColor: string;
  mainBackground: string;
  mainColor: string;
}

export { ThemeInterface };
