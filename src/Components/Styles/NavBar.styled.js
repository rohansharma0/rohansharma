import styled from "styled-components";

export const StyledNavBar = styled.div`
	height: 15vh;
	width: 100%;
	display: flex;
	align-items: center;
	position: absolute;

	.hero-nav{
		display: none;
	}

	.logo-container {
		position: fixed;
		left: 1.5rem;
		background-color: transparent;
		z-index: 999;
		font-size: 2rem;
		mix-blend-mode: difference;
	}

	@media only screen and (min-width: 600px) {
		.logo-container {
			left: 2.5rem;
		}
	}

	@media only screen and (min-width: 1200px) {
		.hero-nav{
			display: flex;
			position: fixed;
			height: 15vh;
			align-items: center;
			right: 2.5rem;
			top: 0;
			ul{
				display: flex;
	
				li{
					list-style: none;
					margin-left:1rem;
	
					a{
						color:#fff;
						font-size:1.1rem;
					}
					
				}
			}
		}
	}
	
`;
