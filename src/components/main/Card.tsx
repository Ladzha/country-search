import { ICountry } from '../models';

const Card = ({ flag, name, region, population, area, capital } : ICountry ) => {
  
  const handleClick=()=>{

  }
  return (
    <div className='card' onClick={handleClick}>
      <div className='flag'>      
        <img src={flag} title={`Flag of ${name}`} alt= {`Flag of ${name}`} />
      </div>
      <div className='info'>
        <p className='name'><strong>{name}</strong></p>
        <p><strong>Capital: </strong>{capital}</p>
        <p><strong>Population: </strong>{population}</p>
        <p><strong>Area: </strong>{area}</p>
        <p><strong>Region: </strong>{region}</p>
      </div>      
    </div>
  )
}

export default Card