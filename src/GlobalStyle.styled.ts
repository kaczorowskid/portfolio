import { createGlobalStyle } from "styled-components";
import wallpaper from './assets/img/wallpaper.png';

const GlobalStyle = createGlobalStyle<{wall?: any}>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }
    html {
        background-image: url(${props => props.wall});
        height: 100%;
        background-color: black;
        background-position: center; 
        background-repeat: no-repeat; 
        background-size: cover; 
    }
`;

export default GlobalStyle;