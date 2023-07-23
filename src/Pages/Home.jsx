import React from 'react'
import HomeHero from '../Components/Home.Hero'
import HomeFooter from '../Components/Home.Footer'
import { StyledHome } from '../Components/Styles/Home.styled'

const Home = () => {
    return (
        <StyledHome>
            <HomeHero />
            <HomeFooter />
        </StyledHome>
    )
}

export default Home