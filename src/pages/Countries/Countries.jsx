import React, { useState } from "react";
import { useEffect } from "react";
import { getAllCountriesData } from "../../services/CountriesApi";
import "./Countries.css";
import Card from "../../components/UI/Countries/Card.jsx";



export default function Countries() {
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        handleGetAllCountriesData();
    }, []);

    async function handleGetAllCountriesData() {
        setAllCountries(await getAllCountriesData());
        // allCountries.forEach(country => {
        //     console.log(country.flags.svg);
        //     console.log(country.name.common);
        //     console.log(country.capital[0]);
        //     if (Object.keys(country.currencies).length !== 0) {
        //         let currencies = Object.entries(country.currencies);
        //         console.log(currencies[0][1].name);
        //     }
        // });
    }

    return (
        <>
            <div className="countries-section">
                <p className="countries-section_title">
                    Meet The Countries
                </p>
                <div className="country-cards-container">
                    {
                        allCountries.map((country, index) => (
                            <Card
                                key={index}
                                countryFlag={country.flags.svg}
                                countryName={country.name.common}
                                countryCapital={country.capital[0]}
                                countryCurrency={
                                    (Object.keys(country.currencies).length != 0) ? Object.entries(country.currencies)[0][1].name : ""
                                }
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}


