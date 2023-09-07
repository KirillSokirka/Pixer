import { createGlobalStyle } from "styled-components";
import { ThemeInterface } from "./theme";
import { sizes } from "./variables";

const GlobalStyles = createGlobalStyle<{ theme: ThemeInterface }>`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.mainBackground};
        color: ${({ theme }) => theme.mainColor};
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        box-sizing: inherit;
        width: 100%;
        height: 100%;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {            
          background: ${({ theme }) => theme.scrollbarTrackColor}; 
        }

        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.scrollbarThumbHoverColor};
            border-radius: 8px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background: ${({ theme }) => theme.scrollbarThumbHoverColor};
        }
    }
`;

export default GlobalStyles;
