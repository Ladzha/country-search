import { useState } from 'react'
import List from './countries/List';
import Interaction from './interaction/Interaction';

const Main = () => {

  const [searchValue, setSearchValue]=useState('')
  const [filterValue, setFilterValue]=useState('')
  const [sortValue, setSortValue]=useState('')
  
  const onSearchChange =(value)=>{
    setSearchValue(value)
  }

  const onFilterChange=(value)=>{
    setFilterValue(value);
  }

  const onSortChange =(value)=>{
    setSortValue(value);
  }

  return (
    <main className='main'>
      <Interaction 
      onSearchChange={onSearchChange} 
      onFilterChange={onFilterChange} 
      onSortChange={onSortChange}/>
      <List 
      searchValue={searchValue} 
      filterValue={filterValue} 
      sortValue={sortValue}/>
    </main>
  )
}

export default Main