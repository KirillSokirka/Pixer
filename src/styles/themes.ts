import { ThemeInterface } from "./theme";

const lightTheme: ThemeInterface = {
  sidebarBackground: "#FFF",
  sidebarColor: "#A8A8A8",
  mainBackground: "#F8F8F8",
  mainColor: "#2A2A2A",
  buttonBorder: "#F8F8F8;",
  buttonBg: "#ECECEC;",
  svgFill: "black",
  scrollbarThumbColor: "#ECECEC;",
  scrollbarThumbHoverColor: "#ececec2f;",
  scrollbarTrackColor: "#ECECEC;",
  topProductsBg: "#F3F3F3",
};

const darkTheme: ThemeInterface = {
  sidebarBackground: "#212121",
  sidebarColor: "#808080",
  mainBackground: "#181818",
  mainColor: "#FFFFFF",
  buttonBorder: "#171717",
  buttonBg: "#212121;",
  svgFill: "#808080",
  scrollbarThumbColor: "#2A2A2A",
  scrollbarThumbHoverColor: "#ececec2f;",
  scrollbarTrackColor: "#2A2A2A",
  topProductsBg: "#212121",
};

export { lightTheme, darkTheme };
