import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <nav className="navbar grid">
                    <div className='navbar_logo_container'>
                        <NavLink to="/" className={"font-xx-large font-bold text-white link-no-underline"}>
                            World Atlas
                        </NavLink>
                    </div>
                    <div>
                        <ul>
                            <li className='navbar_ul_li width-full'>
                                <NavLink to="/home" className={"font-bold text-white link-no-underline"}>Home</NavLink>
                                <NavLink to="/countries" className={"font-bold text-white link-no-underline"}>Countries</NavLink>
                                <NavLink to="/about" className={"font-bold text-white link-no-underline"}>About</NavLink>
                                <NavLink to="/contact" className={"font-bold text-white link-no-underline"}>Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header >
        </>
    )
}
