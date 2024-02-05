import React from 'react'

const Sort = () => {
  return (
    <select name="sort" id="">
      <option value="">Filter by...</option>
      <option value="alphabetical">Alphabetical</option>
      <option value="size">Size</option>
      <option value="population">Population</option>
    </select>
  )
}

export default Sort