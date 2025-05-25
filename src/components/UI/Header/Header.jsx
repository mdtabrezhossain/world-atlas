import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import "./Header.css";

export default function Header() {
    const [isOnMobileView, setIsOnMobileView] = useState(window.innerWidth <= 640);
    const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

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
        }
    };

    return (
        <>
            <header>

                <nav className="navbar grid">

                    <div className='navbar_logo_container'>
                        <NavLink to="/home" >World Atlas</NavLink>
                    </div>

                    <div className='navbar_options_container'>
                        <ul id="navbarMenu" className={`navbar_ul ${isHamMenuOpen ? "" : "hide"}`}>
                            <li>
                                <NavLink to="/home" className={({ isActive }) => `${checkIfIsLinkActive(isActive)}`}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => `${checkIfIsLinkActive(isActive)}`}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/countries" className={({ isActive }) => `${checkIfIsLinkActive(isActive)}`}>Countries</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => `${checkIfIsLinkActive(isActive)}`}>Contact</NavLink>
                            </li>
                        </ul>

                        {(isOnMobileView) && (<GiHamburgerMenu id="hamIcon" onClick={handleHamIconClick} className='navbar_hamicon' />)}
                    </div>

                </nav>

            </header >
        </>
    )
}
