import React from "react";
import { useSelector } from "react-redux";
import countryFacts from "../../assets/jsons/CountryFacts.json";
import Card from "../../components/UI/About/Card.jsx";
import "./About.css";

export default function About() {
    const theme = useSelector((state) => state.themeReducer.theme);

    function generateCards({ countryName, countryCapital, fact }, index) {

        return <Card key={index} countryName={countryName} countryCapital={countryCapital} fact={fact} />;
    }

    return (
        <>
            <div className={`countryFacts-section ${theme}`}>
                <p className={`countryFacts-section_title ${theme}`}>
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


