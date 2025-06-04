import React from "react";
import { useEffect } from "react";
import { getAllCountriesData } from "../../services/CountriesApi";
import "./Countries.css";
import Card from "../../components/UI/Countries/Card";

async function handleGetAllCountriesData() {
    const allCountries = await getAllCountriesData();
    allCountries.forEach(country => {
        console.log(country.flags.svg);
        console.log(country.name.common);
        console.log(country.capital[0]);
        if (Object.keys(country.currencies).length !== 0) {
            let currencies = Object.entries(country.currencies);
            console.log(currencies[0][1].name);
        }
    });
}

export default function Countries() {
    useEffect(() => {
        handleGetAllCountriesData();
    }, []);

    return (
        <>
            <div className="cards-container">
            </div>
        </>
    )
}


