import Search from './Search';
import Filter from './Filter';
import Sort from './Sort';

const Interaction = ({onSearchChange, onFilterChange, onSortChange}) => {

  const handleSearch=(value: string)=>{
    onSearchChange(value);
  }

  const handleFilter=(value: string)=>{
    onFilterChange(value);
  }

  const handleSort=(value: string)=>{
    onSortChange(value);
  }

  return (
    <div className='interaction'>
        <Search onSearchChange={handleSearch}/>
      <div className='selection'>
        <Filter onFilterChange={handleFilter}/>
        <Sort onSortChange={handleSort}/>
      </div>
    </div>
  )
}

export default Interaction