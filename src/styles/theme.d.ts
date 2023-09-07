import { DefaultTheme } from "styled-components";

interface ThemeInterface extends DefaultTheme {
  sidebarBackground: string;
  sidebarColor: string;
  mainBackground: string;
  mainColor: string;
  buttonBorder: string;
  buttonBg: string;
  svgFill: string;
  scrollbarTrackColor: string;
  scrollbarThumbColor: string;
  scrollbarThumbHoverColor: string;
  topProductsBg: string;
}

export { ThemeInterface };
