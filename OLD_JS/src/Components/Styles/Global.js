import { createGlobalStyle } from "styled-components";
import KrylonFont from "../../Static/fonts/Krylon-Regular.otf";

const GlobalStyles = createGlobalStyle`

    @font-face {
		font-family: "Krylon";
		src: url(${KrylonFont}) format("opentype");
		font-weight: 400;
	}

    * {
        margin: 0;
        padding: 0;
        font-family: 'Krylon', sans-serif;
        box-sizing: border-box;
        
        // cursor: none !important;
    }

    a{
        color:${props => props.theme.textColor};
        text-decoration: none;
        width: fit-content;
        display: block;
    }

    body{
        color: ${props => props.theme.textColor};
        transition: none;
    }



`;

export default GlobalStyles;
