import React from 'react'
import { useSelector } from 'react-redux'
import "./Card.css"

export default function Card({ countryName, countryCapital, fact }) {
    const theme = useSelector((state) => state.themeReducer.theme);
    return (
        <>
            <div className={`card ${theme}`}>
                <div className="card_title">{countryName}</div>
                <div className="card_text">
                    <p>Capital: {countryCapital} </p>
                    <p>{fact}</p>
                </div>
            </div>
        </>
    )
}
