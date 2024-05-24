import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const url = 'https://restcountries.com/v3.1/all'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountries = country =>{
        
        const newMarkVisitedCountry = [...visitedCountries, country]
        setVisitedCountries(newMarkVisitedCountry)
        
    }
    return (
        <div>
            <h4>Countries: {countries.length} </h4>

            <div>
                <h4>Visited Country List: {visitedCountries.length}</h4>
               {
                visitedCountries.map(country=> <li key={country.cca2}>{country.name.common}</li>)
               }
            </div>
           <div className="country-container">
           {
                countries.map(country => <Country 
                     key={country.cca3} 
                     handleVisitedCountries={handleVisitedCountries}
                     country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;