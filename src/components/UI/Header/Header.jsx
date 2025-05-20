import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'

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
        return isActive ? "navlink-active" : "";
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

    // closes the navbar menu when clicked outside of it in the mobile view
    function exitHamMenuInMobile(event) {

        const menu = document.getElementById("navbarMenu");
        const hamIcon = document.getElementById("hamIcon");

        // if the clicked element is outside the the menu and the icon
        if (!menu.contains(event.target) && !hamIcon.contains(event.target)) {
            setIsHamMenuOpen(false);
        }
    };

    return (
        <>
            <header>

                <nav className="navbar grid">

                    <div className='navbar_logo_container'>
                        <NavLink to="/" className={"font-xx-large font-bold text-white link-no-underline"}>World Atlas</NavLink>
                    </div>

                    <div className='navbar_options_container flex'>
                        <ul id="navbarMenu" className={`navbar_ul ${isHamMenuOpen ? "" : "hide"}`}>
                            <li>
                                <NavLink to="/home" className={({ isActive }) => `text-white link-no-underline ${checkIfIsLinkActive(isActive)}`}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about" className={({ isActive }) => `text-white link-no-underline ${checkIfIsLinkActive(isActive)}`}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/countries" className={({ isActive }) => `text-white link-no-underline ${checkIfIsLinkActive(isActive)}`}>Countries</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={({ isActive }) => `text-white link-no-underline ${checkIfIsLinkActive(isActive)}`}>Contact</NavLink>
                            </li>
                        </ul>

                        {(isOnMobileView) && (<GiHamburgerMenu id="hamIcon" onClick={handleHamIconClick} className='navbar_hamicon text-white font-size-xxlg' />)}
                    </div>

                </nav>

            </header >
        </>
    )
}
