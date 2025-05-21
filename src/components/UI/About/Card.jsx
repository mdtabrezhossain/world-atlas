import React from 'react'
import "./Card.css"

export default function Card({ countryName, countryCapital, fact }) {
    return (
        <>
            <div className="card">
                <div className="card_title">{countryName}</div>
                <div className="card_text">
                    <p>Capital: {countryCapital} </p>
                    <p>{fact}</p>
                </div>
            </div>
        </>
    )
}
