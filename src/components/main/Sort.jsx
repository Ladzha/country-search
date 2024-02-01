import React from 'react'

const Sort = () => {
  return (
    <div className='sort'>
      <label htmlFor="sort">Sort by...</label>
      <select name="sort" id="">
        <option value="alphabetical">Alphabetical</option>
        <option value="size">Size</option>
        <option value="population">Population</option>
      </select>
    </div>
  )
}

export default Sort