import Card from './Card';
import useCountry from '../../hooks/useCountry'
import Error from './Error';
import Loader from './Loader';

const List = ({searchValue, filterValue, sortValue}) => {

  const {countries, loading, error}=useCountry()
  let filteredCountries = countries;

  if(searchValue){
    filteredCountries=filteredCountries.filter((country)=>
    country.name.common.toLowerCase().startsWith(searchValue.toLowerCase()))
  }

  if(filterValue){
    filteredCountries=filteredCountries.filter((country)=>(
    country.region.toLowerCase()===filterValue.toLowerCase()))
  }
  if(sortValue){
    filteredCountries.sort((a, b)=>{
      if(sortValue==='alphabetical'){
        return a.name.common.localeCompare(b.name.common)
      }
      else if(sortValue==='population'){
        return b.population - a.population
      }
      else if(sortValue==='size'){
        return b.population - a.population
      }
    })
  }

  return (
    <section className='list-container'>

      {error && <Error error={error}/>}  
      {loading && <Loader/>} 
      {filteredCountries.length <= 0 && !loading && !error ?
      <h2 className='no-result'>There are no results for your search</h2> : null}

      <div className='list'>
        {!loading && filteredCountries
        .map((country) =>(
          <Card 
          key={country.flags.svg}
          flag={country.flags.svg}
          name={country.name.common}
          region={country.region}
          population={country.population}
          area={country.area}
          capital={country.capital}
          />
        ))}
      </div>
    </section>
  )
}

export default List