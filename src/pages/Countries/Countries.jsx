import React, {
    useState,
    useEffect
} from "react";

import { useSelector } from "react-redux";

import { getAllCountriesData } from "../../services/CountriesApi";

import Card from "../../components/UI/Countries/Card.jsx";
import SearchBar from "../../components/UI/Countries/SearchBar.jsx";
import "./Countries.css";



export default function Countries() {
    const [allCountries, setAllCountries] = useState([]);
    const [searchedCountries, setSearchedCountries] = useState([]);
    const theme = useSelector((state) => state.themeReducer.theme);

    useEffect(() => {
        handleGetAllCountriesData();
    }, []);

    async function handleGetAllCountriesData() {
        const countries = await getAllCountriesData();
        setAllCountries(countries);
        setSearchedCountries(countries);
    }

    function showCountries() {
        return searchedCountries.map((country, index) => (
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

    return (
        <>
            <div className={`countries-section ${theme}`}>
                <p className="countries-section_title">Meet The Countries</p>
                <SearchBar
                    allCountries={allCountries}
                    setSearchedCountries={setSearchedCountries} />
                <div className="country-cards-container">{showCountries()}</div>
            </div>
        </>
    )
}


