import React from 'react'
import { useSelector } from 'react-redux';
import "./SearchBar.css";


export default function SearchBar({ allCountries, setSearchedCountries }) {
    const theme = useSelector((state) => state.themeReducer.theme);

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
            <input className={`searchbar ${theme}`} placeholder="Search Your Favorite Country" onChange={handleInputOnChange} />
        </>
    )
}
