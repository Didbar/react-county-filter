import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'

import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'
import Loader from './components/common/Loader'

import './App.css'
import CustomSelect from './components/common/CustomSelect'

function App() {
  const selectOption = [
    { value: 'All', label: 'Filter By Region' },
    { value: 'Africa', label: 'Africa' },
    { value: 'Americas', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ]
  const [searchInput, setSearchInput] = useState('')
  const {
    data: countries,
    loading,
    error
  } = useFetch('https://restcountries.com/v3.1/all')

  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [countryNames, setCountryNames] = useState([])
  const [filterParam, setFilterParam] = useState('All')

  useEffect(() => {
    const names = filteredCountries.map((country) => country?.name?.common).sort()
    setCountryNames(names)
  }, [filteredCountries])

  useEffect(() => {
    handleSearch(searchInput)
  }, [searchInput, countries, filterParam])

  const handleSearch = (input) => {
    if (!countries) return
    if (filterParam !== 'All') {
      const filterByRegion = countries.filter((country) => country.region === filterParam)
      setFilteredCountries(filterByRegion)
    } else {
      setFilteredCountries(countries)
    }
    if (!input) return
    let filtered = filteredCountries.filter((country) =>
      country.name.common.toLowerCase().includes(input.trim().toLowerCase())
    )
    setFilteredCountries(filtered)
    setSelectedCountry(filtered[0])
  }
  const handleClear = () => {
    setSearchInput('')
    setFilterParam('All')
  }
  const handleCountryHover = (value) => {
    const selected = countries.filter((country) => country.name.common === value)
    setSelectedCountry(selected[0])
  }

  if (loading) return <Loader />
  if (error) return <div className='App'>{error.message}</div>

  return (
    <div className='App'>
      <SearchBar setInput={setSearchInput} input={searchInput} />
      <CustomSelect
        options={selectOption}
        onChange={setFilterParam}
        ariaLabel='Filter Countries By Countries'
        selectedValue={filterParam}
      />
      <CountryList
        countryNames={countryNames}
        setInput={setSearchInput}
        onClear={handleClear}
        onItemHover={handleCountryHover}
      />
      <CountryDetails country={selectedCountry} />
    </div>
  )
}

export default App
