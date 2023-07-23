import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { StyledNavBar } from "./Styles/NavBar.styled";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
    return (
        <StyledNavBar>
            <div className="logo-container clickableLinkGlow">rohan</div>

            <div className="hero-nav">
                <ThemeSwitch />
                <ul>
                    <li><a href="/">Home.</a></li>
                    <li><a href="about">About.</a></li>
                    <li><a href="contact">Contact.</a></li>
                </ul>
            </div>
            <Menu />
        </StyledNavBar>
    );
};

export default NavBar;
