import axios from "axios";

export async function getAllCountriesData() {
    let response = await axios({
        method: "get",
        url: "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags"
    });
    return response.data
}
