import React from "react";
import Card from "./Card";
import "./About.css";
import countryFacts from "../../../assets/jsons/CountryFacts.json";

export default function About() {

    function generateCards({ countryName, countryCapital, fact }, index) {

        return <Card key={index} countryName={countryName} countryCapital={countryCapital} fact={fact} />;
    }

    return (
        <>
            <div className="countryFacts-section">
                <p className="countryFacts-section_title">
                    Did you know this?
                </p>
                <div className="countryFacts-section_card-container">
                    {
                        countryFacts.map(generateCards)
                    }
                </div>
            </div>
        </>
    )
}


