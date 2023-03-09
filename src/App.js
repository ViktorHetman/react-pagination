import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CountyList from './Components/CountyList'
import Pagination from './Components/Pagination'



function App() {
  const countriesPerPage = 10
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const getCountriesData = async () => {
      setLoading(true)
      const res = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(res.data)
      setLoading(false)
    }
    getCountriesData()
  }, [])


  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber) 

  return (
    <div>
      <h1>Countires List</h1>
      <CountyList countries={currentCountry} loading={loading}/>
      <Pagination countriesPerPage={countriesPerPage} totalCountries={countries.length} paginate={paginate}/>
    </div>
  )
}

export default App
