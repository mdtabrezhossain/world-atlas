import React from 'react'
import { GridLoader } from 'react-spinners';
import "./PageLoader.css"

export default function Loading() {
    return (
        <>
            <div className="page-loader-container">
                <GridLoader color='white' speedMultiplier={2} /><br />
                <p>Loading...</p>
            </div>
        </>
    )
}
