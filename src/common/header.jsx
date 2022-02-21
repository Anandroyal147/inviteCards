/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { browserHistory } from 'react-router';
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import { smallScreen, bigScreen } from '../reducers/windowSizeReducer'

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmalScreen, setIsSmallScreen] = useState(false);
    const screen = useSelector((state) => state.screen.value)
    const dispatch = useDispatch()
    var navClass;
    useEffect(() => {
        getWindowSize()
    }, []);


    const getWindowSize = () => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }
    const handleMediaQueryChange = mediaQuery => {

        if (mediaQuery.matches) {
            dispatch(smallScreen())
            console.log('test===>', screen)
        } else {
            setIsSmallScreen(false);
            dispatch(bigScreen())
            console.log('test123===>', screen)

        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };
    var headerClass = !screen ? "Header" : "navbar-default header-navigation stricky stricky-fixed slideInDown animated";
    // navClass = !screen ? "Nav" : 'gone'
    // navClass = ? : 'gone'
    if (!isNavVisible && !screen) {
        navClass = "Nav"
    } else if (!isNavVisible) {
        navClass = "gone"
    } else if (isNavVisible) {
        navClass = 'navbar-collapse main-navigation mainmenu collapse in'
    }
    var ulClass = screen ? "nav navbar-nav navigation-box" : ""
    return (

        <header className={headerClass}>
            <div className="thm-container">
                <button onClick={toggleNav} className="Burger">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <img src={require("../Assets/logo.jpg")} className="Logo" alt="logo" />
                <CSSTransition
                    in={!isSmalScreen || isNavVisible}
                    timeout={350}
                    classNames="NavAnimation"
                    unmountOnExit >
                    <nav className={navClass} id='menu' >
                        <ul className={ulClass}>
                            <li> <Link className="link" to="/">Home</Link></li>
                            <li>  <div class="dropdown">
                                <a class="dropbtn">About  us</a>
                                <div class="dropdown-content">
                                    <Link to="/about">Who We Are</Link>
                                    <Link to="/managementdesk">ManageMent Desk</Link>
                                    <Link to="/awards">Awards</Link>
                                </div>
                            </div></li>
                            <li>  <Link className="link" to={'/facilities'}>Facilities</Link></li>
                            <li>  <Link className="link" to={'/products'}>Products</Link></li>
                            <li>  <Link className="link" to={'/services'}>Services</Link></li>
                            <li>  <Link className="link" to={'/contactUs'}>ContactUs</Link></li>
                            <li>  <Link className="link" to={'/login'}>Login</Link></li>
                        </ul>
                    </nav>
                </CSSTransition>
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
