import React from 'react'
import './SearchBar.css'
function SearchBar({ input, setInput }) {
  return (
    <div className='search'>
      <div className='wrapper'>
        <span className='icon'>🔎</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoFocus
          className='input'
          type='text'
          placeholder='Search for countries...'
        />
      </div>
    </div>
  )
}

export default SearchBar
