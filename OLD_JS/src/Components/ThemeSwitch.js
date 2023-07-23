import React, { useContext, useEffect, useState } from 'react'
import { StyledThemeSwitch } from './Styles/ThemeSwitch.styled'
import { ThemeContext } from '../Helper/ThemeContext';

const ThemeSwitch = () => {

    const handleSwitch = () => {
        if (themeContext.theme === "darkTheme") {
            themeContext.setTheme("lightTheme")
        } else {
            themeContext.setTheme("darkTheme")
        }
    }

    const themeContext = useContext(ThemeContext);

    return (
        <StyledThemeSwitch onClick={handleSwitch}>
            {themeContext.theme === "darkTheme" ? (<div class="sun icon"></div>) : (<div class="moon icon"></div>)}

        </StyledThemeSwitch>

    )
}

export default ThemeSwitch