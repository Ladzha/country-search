import React from 'react'
import Search from './Search';
import Filter from './Filter';
import Sort from './Sort';

const Interaction = () => {
  return (
    <div className='interaction'>
      <Search/>
      <Filter/>
      <Sort/>
    </div>
  )
}

export default Interaction