import React, { useEffect } from 'react'
import { StyledBackground } from '../Components/Styles/Background'

const Background = () => {
    useEffect(() => {
        console.log("background-changed");
    })

    return (
        <StyledBackground>
            <div class="noise"></div>
        </StyledBackground>
    )
}

export default Background