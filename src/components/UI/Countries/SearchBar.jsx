import React from 'react'
import "./SearchBar.css";

export default function SearchBar({ allCountries, setSearchedCountries }) {
    function handleInputOnChange(event) {
        const searchedKeyword = event.target.value.toLowerCase();
        console.log(searchedKeyword);
        if (searchedKeyword === "") {
            setSearchedCountries(allCountries);
            console.log("empty input");
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
