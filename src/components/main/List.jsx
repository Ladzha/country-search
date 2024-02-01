import React, {useState} from 'react';
import Card from './Card';

const List = ({condition}) => {

  const [countries, setCountries] = useState(['Albania', 'Bolgaria' ])

  return (
    <section className='list'>
      {countries.map(country =>(
        <Card country={country}/>
      ))}
    </section>
  )
}

export default List