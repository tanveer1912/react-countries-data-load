import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries }) => {
    // console.log(country)
    const { name, flags, capital,
        area, population } = country;

    const [visited, setVisited] = useState(false)
    const [markVisited, setMarkVisited] = useState(false)


    const handleVisited = () => {
        setVisited(!visited)

    }

    const handleMarkVisited = () => {
        setMarkVisited(!markVisited)

    }
    return (
        <div className={`country ${visited && 'visited'} ${markVisited && 'visited'}`}>
            <h2 style={{ color: visited ? 'green' : 'black', backgroundColor: markVisited && 'tomato' }}>Country Name: {name?.common}</h2>
            <img src={flags?.png} alt="" />
            <h4 style={{ fontSize: visited && '20px', color: visited && 'white' }}>Capital: {capital}</h4>
            <p style={{ fontSize: markVisited && '20px' }}>Population: {population}</p>
            <p>Area: {area}</p>

            <button onClick={() => {
                handleMarkVisited()
                handleVisitedCountries(country)
            }} style={{ margin: '10px' }} className='btn'>Mark Visited Country</button>

            <button onClick={handleVisited} className='btn'>{visited ? 'Visited' : 'Going'}</button>
            {visited ? 'I have Visited this Country' : 'I want to go'}
        </div>
    );
};

export default Country;