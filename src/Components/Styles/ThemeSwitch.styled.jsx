import { styled } from "styled-components";

export const StyledThemeSwitch = styled.div`

    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    cursor: pointer;

    .moon.icon {
        color: #000;
        position: absolute;
        margin-left: 4px;
        margin-top: 2px;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        border-top: solid 1px currentColor;
        border-bottom: solid 1px currentColor;
        border-left: solid 1px currentColor;
        border-right: solid 1px transparent;
    }
      
    .moon.icon:before {
    content: '';
    position: absolute;
    left: 6px;
    top: 1px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
    border-top: solid 1px transparent;
    border-bottom: solid 1px currentColor;
    border-left: solid 1px currentColor;
    border-right: solid 1px transparent;
    }
      

    .sun.icon {
        color: #fff;
        position: absolute;
        margin-left: 7px;
        margin-top: 7px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 2px solid currentColor;
        box-shadow: -8px 0 0 -4px currentColor,
                    8px 0 0 -4px currentColor, 
                    0 -8px 0 -4px currentColor,
                    0 8px 0 -4px currentColor,
                    -6px -6px 0 -4px currentColor,
                    -6px 6px 0 -4px currentColor,
                    6px -6px 0 -4px currentColor,
                    6px 6px 0 -4px currentColor;
    }
    
  
`