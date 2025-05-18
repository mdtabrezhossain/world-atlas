import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

export default function Header() {
    let isOnMobileView = false;

    function checkIfIsActive(isActive) {
        return isActive ? "font-bold" : "";
    }
    return (
        <>
            <header>
                <nav className="navbar grid">
                    <div className='navbar_logo_container'>
                        <NavLink to="/" className={"font-xx-large font-bold text-white link-no-underline"}>World Atlas</NavLink>
                    </div>
                    <div className='navbar_ul_container'>
                        {
                            (isOnMobileView) ||
                            (<ul className='navbar_ul flex-align-center'>
                                <li>
                                    <NavLink to="/home" className={({ isActive }) => `text-white link-no-underline ${checkIfIsActive(isActive)}`}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({ isActive }) => `text-white link-no-underline ${checkIfIsActive(isActive)}`}>About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/countries" className={({ isActive }) => `text-white link-no-underline ${checkIfIsActive(isActive)}`}>Countries</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className={({ isActive }) => `text-white link-no-underline ${checkIfIsActive(isActive)}`}>Contact</NavLink>
                                </li>
                            </ul>)
                        }
                        {isOnMobileView && <GiHamburgerMenu className='text-white font-size-xxlg' />}
                    </div>
                </nav>
            </header >
        </>
    )
}
