
function CountyList({countries,loading}) {

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <ul>
      { 
        countries.map((country, i)=> (
          <li key={i}>
            {country.name.common} 
            <img src={country.flags.png} alt="country flag" style={{width:25}}/>
          </li>
        ))
      }
    </ul>
  ) 
}

export default CountyList