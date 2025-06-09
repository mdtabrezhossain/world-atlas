import React from 'react'
import "./SearchBar.css";

export default function SearchBar({ allCountries, setSearchedCountries }) {
    function handleInputOnChange(event) {
        const searchedKeyword = event.target.value.toLowerCase();
        if (searchedKeyword === "") {
            setSearchedCountries(allCountries);
        }
        else {
            const searchedCountries = allCountries.filter((country) =>
                country.name.common.toLowerCase().startsWith(searchedKeyword)
            );
            setSearchedCountries(searchedCountries);
        }
    }

    return (
        <>
            <input className="searchbar" placeholder="Search Your Favorite Country" onChange={handleInputOnChange} />
        </>
    )
}
