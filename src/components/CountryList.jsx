import React from 'react'
import './CountryList.css'

function CountryList({ countryNames, setInput, onClear, onItemHover }) {
  if (!countryNames) return <>...</>
  return (
    <ul className='country__selections'>
      {countryNames.map((name) => (
        <li
          className='country__name'
          key={name}
          onClick={(e) => setInput(e.target.textContent)}
          onMouseEnter={(e) => onItemHover(e.target.textContent)}>
          {name}
        </li>
      ))}
      <button className='btn btn__primary' onClick={onClear}>
        Clear filters
      </button>
    </ul>
  )
}

export default CountryList
