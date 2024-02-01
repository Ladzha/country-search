import React from 'react'

const Filter = () => {
  return (
    <div className='filter'>
      <label htmlFor="filter">Filter by...</label>
      <select name="filter" id="">
        <option value="region">Region</option>
        <option value="religion">Religion</option>
      </select>
    </div>
  )
}

export default Filter