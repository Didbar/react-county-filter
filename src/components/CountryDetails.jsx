import React from 'react'
import './CountryDetails.css'

function CountryDetails({ country }) {
  if (!country) return <div className='country__details'>No Details Available...</div>
  const languages = country.languages ? Object.values(country.languages) : []

  return (
    <div className='country__details'>
      <div className='country__card'>
        <h3 className='name'>{country.name.official}</h3>
        <div className='details'>
          <div className='info'>
            <div className='capital'>
              Capital: <strong>{country.capital}</strong>
            </div>
            <div className='region'>
              Region: <strong>{country.region}</strong>
            </div>
            <div className='languages'>
              Languages:
              {languages.map((lang) => (
                <span className='language' key={lang}>
                  <strong>{lang}</strong>
                </span>
              ))}
            </div>
            <div className='area'>
              Area:<strong>{country.area.toLocaleString()} km²</strong>
            </div>
            <div className='population'>
              Population: <strong>{country.population.toLocaleString()}</strong>
            </div>
            <div className='continents'>
              Continents:{' '}
              {country.continents.map((continent) => (
                <span key={continent} className='continent'>
                  <strong>{continent}</strong>
                </span>
              ))}
            </div>
          </div>
          <div className='flag__image'>
            <img src={country.flags.png} alt='Country flag' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
