import { useThemeContext } from "../../contexts/hooks";
import Button from "../Button";
import { Moon, Sun } from "../../assets/svg";
import { darkTheme, lightTheme } from "../../styles/themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useThemeContext();

  return (
    <>
      {theme === lightTheme ? (
        <Button logo={Sun} onClick={() => setTheme(darkTheme)} />
      ) : (
        <Button logo={Moon} onClick={() => setTheme(lightTheme)} />
      )}
    </>
  );
};

export default ThemeToggler;
