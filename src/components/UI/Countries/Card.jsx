import React from 'react'
import "./Card.css";

export default function Card({ countryFlag, countryName, countryCapital, countryCurrency }) {
    return (
        <>
            <div className="country-card">
                <div className="country-card_image-container">
                    <img className="country-card_image" loading="lazy" src={countryFlag} />
                </div>
                <div className="country-card_content">
                    <p>Name: <strong>{countryName}</strong></p >
                    <p>Capital: <strong>{countryCapital}</strong></p >
                    <p>Currency: <strong>{countryCurrency}</strong></p >
                </div>
            </div >

        </>
    )
}

