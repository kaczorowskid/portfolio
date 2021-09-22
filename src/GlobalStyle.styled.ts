import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'IBM Plex Sans Arabic', sans-serif; */
        
    }
    html {
        background: #0d1117;
    }
`;

export default GlobalStyle;