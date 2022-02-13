/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { browserHistory } from 'react-router';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
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
                        <Link to="/">Home</Link>
                        <div class="dropdown">
                            <a  class="dropbtn">About  us</a>
                            <div class="dropdown-content">
                                <Link to="/about">Who We Are</Link>
                                <Link to="/managementdesk">ManageMent Desk</Link>
                                <Link to="/awards">Awards</Link>
                            </div>
                        </div>
                        <Link to={'/facilities'}>Facilities</Link>
                        <Link to={'/products'}>Products</Link>
                        <Link to={'/services'}>Services</Link>
                        <Link to={'/contactUs'}>Login</Link>
                        
                    </nav>
                </CSSTransition>
                <button onClick={toggleNav} className="Burger">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>

// <header class="Header home-page-one">

// <nav class="navbar navbar-default header-navigation stricky slideIn animated">

//     <div class="thm-container clearfix">

//         <div class="navbar-header">
//             <img src={require("../Assets/logo.jpg")} className="Logo" alt="logo" />

//             <div class="collapse navbar-collapse main-navigation mainmenu " id="main-nav-bar">
//                 <CSSTransition
//                     in={!isSmallScreen || isNavVisible}
//                     timeout={350}
//                     classNames="NavAnimation"
//                     unmountOnExit >
//                     <nav className="Nav">
//                         <a href="/">Home</a>
//                         <div class="dropdown">
//                             <a class="dropbtn">About  us</a>
//                             <div class="dropdown-content">
//                                 <a href="/about">Who We Are</a>
//                                 <a href="/managementdesk">ManageMent Desk</a>
//                                 <a href="/awards">Awards</a>
//                             </div>
//                         </div>
//                         <a href="/">Facilities</a>
//                         <a href="/">Products</a>
//                         <a href="/">Services</a>
//                         <a href="/">Contact us</a>
//                         <a href="/">Login</a>
//                     </nav>
//                 </CSSTransition>
//                 <button onClick={toggleNav} className="Burger">
//                     <FontAwesomeIcon icon={faBars} />
//                 </button>
//             </div>
//         </div>
//     </div>
// </nav>

// </header >
    );
}
