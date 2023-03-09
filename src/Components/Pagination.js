import React from 'react'

function Pagination({countriesPerPage, totalCountries, paginate}) {
  console.log(totalCountries)
  const pageNumbers = []
  
  for (let i = 1; i <= Math.ceil(totalCountries/countriesPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <ul>
      {pageNumbers.map((number)=> (
        <li key={number}>
          <a href='!#' onClick={() => paginate(number)}>
            {number}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination