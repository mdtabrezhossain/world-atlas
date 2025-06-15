import React from 'react'
import { useSelector } from 'react-redux';
import { GridLoader } from 'react-spinners';
import "./PageLoader.css"

export default function Loading() {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <>
            <div className={`page-loader-container ${theme}`}>
                <GridLoader color={theme === "light" ? "black" : "white"} speedMultiplier={2} /><br />
                <p>Loading...</p>
            </div>
        </>
    )
}
