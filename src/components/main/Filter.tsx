import React, {useState} from 'react'

const Filter = ({onFilterChange}) => {
  const [region, setRegion] = useState('')

  const handleClick = (event: React.KeyboardEvent<HTMLSelectElement>)=>{
    setRegion(event.target.value); 
    onFilterChange(event.target.value)  
  }
  return (
    <div className='filter'>
      <select name="filter" id='filter' value={region} onChange={handleClick}>
        <option value="">All</option>
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Antarctic">Antarctic</option>
        <option value="Oceania">Australia/Oceania</option>
      </select> 
    </div>
  )
}

export default Filter