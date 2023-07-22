import { styled } from "styled-components";

export const StyledHome = styled.main`

    margin: 0px 1.5rem;

    @media only screen and (min-width: 600px) {
        margin : 0 2.5rem;
	}

    @media only screen and (min-width: 950px) {
        margin : 0 10rem;
	}
    
    /* Extra large devices (large laptops and desktops, 1200px and up) */
	@media only screen and (min-width: 1200px) {
        margin : 0 15vw;
	}
`