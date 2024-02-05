import React from 'react'
import Search from './Search';
import Filter from './Filter';
import Sort from './Sort';

const Interaction = ({onFilter}) => {
  return (
    <div className='interaction'>
      <Search onFilter={onFilter}/>
      <div className='selection'>
        <Filter />
        <Sort/>
      </div>
    </div>
  )
}

export default Interaction