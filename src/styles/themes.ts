interface ThemeInterface {
  sidebarBackground: string;
  sidebarColor: string;
  mainBackground: string;
  mainColor: string;
  buttonBorder: string;
  buttonBg: string;
  svgFill: string;
}

const lightTheme: ThemeInterface = {
  sidebarBackground: "#FFF",
  sidebarColor: "#A8A8A8",
  mainBackground: "#F8F8F8",
  mainColor: "#2A2A2A",
  buttonBorder: "#F8F8F8;",
  buttonBg: "#ECECEC;",
  svgFill: "black",
};

const darkTheme: ThemeInterface = {
  sidebarBackground: "#212121",
  sidebarColor: "#808080",
  mainBackground: "#181818",
  mainColor: "#FFFFFF",
  buttonBorder: "#171717",
  buttonBg: "#212121;",
  svgFill: "#808080",
};

export { lightTheme, darkTheme };
