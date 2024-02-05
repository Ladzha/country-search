import Card from './Card';
import useInput from '../../assets/hooks/useInput'
import useCountry from '../../assets/hooks/useCountry'


const List = () => {

  const input =useInput()
  const {countries, loading, error} =useCountry()

  
  return (
    <section className='list-container'>
      <input type="text" 
      className='search-input'
      placeholder='Search for a country...' 
      {...input}/>
      {error && <h3 style={{'color': 'red'}}>{error}</h3>}  
      {loading && <h3>Loading...</h3>} 
      <div className='list'>
        {!loading && countries
        .filter((country)=>
          country.name.common.toLowerCase().startsWith(input.value.toLowerCase()))
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