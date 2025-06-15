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
                    <p>Name: {countryName}</p ><br />
                    <p>Capital: {countryCapital}</p ><br />
                    <p>Currency: {countryCurrency}</p >
                </div>
            </div >

        </>
    )
}

