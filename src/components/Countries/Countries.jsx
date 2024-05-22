import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([])
    const url = 'https://restcountries.com/v3.1/all'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h4>Countries: {countries.length} </h4>
           <div className="country-container">
           {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;