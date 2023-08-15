import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./theme";

const GlobalStyles = createGlobalStyle<{ theme: ThemeInterface }>`
    *,
    *::before,
    *::after {
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.mainBackground};
        color: ${({ theme }) => theme.mainColor};
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
`;

export default GlobalStyles;
