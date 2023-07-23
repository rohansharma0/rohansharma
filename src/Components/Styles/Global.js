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
        text-decoration: none;
        width: fit-content;
        display: block;
    }

    body{
        color: #fff;
        transition: none;
    }


`;

export default GlobalStyles;
