import React from 'react'
import "./Card.css";

export default function Card() {
    return (
        <>
            <div className="country-card">
                <img className="country-card_image" loading="lazy" />
                <div className="country-card_content">
                    <p>Country</p>
                    <p>Capital</p>
                    <p>Currency</p>
                </div>
            </div>
        </>
    )
}
