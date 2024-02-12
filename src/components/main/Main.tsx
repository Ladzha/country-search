import { useState } from 'react'
import List from './List';
import Interaction from './Interaction';


const Main = () => {

  const [searchValue, setSearchValue]=useState('')
  const [filterValue, setFilterValue]=useState('')
  const [sortValue, setSortValue]=useState('')

  console.log('main');
  
  const onSearchChange =(value: string)=>{
    setSearchValue(value)
  }

  const onFilterChange=(value: string)=>{
    setFilterValue(value);
  }

  const onSortChange =(value: string)=>{
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