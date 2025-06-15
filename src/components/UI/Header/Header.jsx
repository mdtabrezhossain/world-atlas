import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaMoon, FaSun } from 'react-icons/fa';

import { changeThemeAction } from '../../../store/slices/ThemeSlice';
import "./Header.css";


export default function Header() {
    const [isOnMobileView, setIsOnMobileView] = useState(window.innerWidth <= 640);
    const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
    const theme = useSelector((state) => state.themeReducer.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("resize", handleSetIsOnMobileView);
        document.addEventListener("click", exitHamMenuInMobile);

        return () => {
            window.removeEventListener("resize", handleSetIsOnMobileView);
            document.removeEventListener("click", exitHamMenuInMobile);

        };
    }, []);

    function checkIfIsLinkActive(isActive) {
        return isActive ? "navlink-active" : "text-white";
    }

    function handleHamIconClick() {
        if (!isHamMenuOpen) {
            setIsHamMenuOpen(true);
            document.body.style.overflow = "hidden";
            return;
        }
    }

    function handleSetIsOnMobileView() {
        setIsOnMobileView(window.innerWidth <= 640);
    };

    function exitHamMenuInMobile(event) {

        const menu = document.getElementById("navbarMenu");
        const hamIcon = document.getElementById("hamIcon");

        // if the clicked element is outside the menu or icon
        if (!menu.contains(event.target) && !hamIcon.contains(event.target)) {
            setIsHamMenuOpen(false);
            document.body.style.overflow = "";
        }

    };

    function handleThemeIconClick() {
        dispatch(changeThemeAction());
    }

    return (
        <>
            <header>

                <nav className={`navbar ${theme}`}>

                    <div className="navbar_logo-container">
                        <NavLink className={theme} to="/home" >World Atlas</NavLink>
                    </div>

                    <div className='navbar_options-container'>
                        <ul id="navbarMenu" className={`navbar_ul ${theme} ${isHamMenuOpen ? "" : "hide"}`}>
                            <li>
                                <NavLink to="/home" className={({ isActive }) => `${checkIfIsLinkActive(isActive)} ${theme}`}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => `${checkIfIsLinkActive(isActive)} ${theme}`}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/countries" className={({ isActive }) => `${checkIfIsLinkActive(isActive)} ${theme}`}>Countries</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => `${checkIfIsLinkActive(isActive)} ${theme}`}>Contact</NavLink>
                            </li>
                        </ul>

                        <div className="navbar_themeIcon" onClick={handleThemeIconClick}>
                            {
                                theme === "dark" ? <FaMoon /> : <FaSun className="navbar_themeIcon_sun" />
                            }
                        </div>

                        {(isOnMobileView) && (<GiHamburgerMenu id="hamIcon" onClick={handleHamIconClick} className={`navbar_hamicon ${theme}`} />)}

                    </div>

                </nav>

            </header >
        </>
    )
}
