import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    console.log(country)
    const {name, flags, capital, 
        area, population} = country;

        const [visited, setVisited] = useState(false)

        const handleVisited = () =>{
            setVisited(!visited)
        }
    return (
        <div className='country'>
           <h2>Country Name: {name ?.common}</h2> 
           <img src= {flags ?. png} alt="" />
           <h4>Capital: {capital}</h4>
           <p>Population: {population}</p>
           <p>Area: {area}</p>
           <button onClick={handleVisited} className='btn'>{visited ? 'Visited' : 'Going'}</button>
           {visited ? 'I have Visited this Country' : 'I want to go'}
        </div>
    );
};

export default Country;