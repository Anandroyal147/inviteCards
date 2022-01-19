/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faBars } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">
            <div className="thm-container">
                <img src={require("../Assets/logo.jpg")} className="Logo" alt="logo" />
                <CSSTransition
                    in={!isSmallScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit >
                    <nav className="Nav">
                        <a href="/">Home</a>
                        <a href="/">About  us</a>
                        <a href="/">Facilities</a>
                        <a href="/">Products</a>
                        <a href="/">Services</a>
                        <a href="/">Contact us</a>
                        <a href="/">Login</a>
                    </nav>
                </CSSTransition>
                <button onClick={toggleNav} className="Burger">
                <FontAwesomeIcon icon={faBars} />
                </button>
            </div> 
        </header>
    );
}
