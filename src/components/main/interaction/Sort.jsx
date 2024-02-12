import  {useState} from 'react'

const Sort = ({onSortChange}) => {
  const [sortValue, setSortValue] = useState('')

  const handleClick = (event)=>{
    setSortValue(event.target.value)
    onSortChange(event.target.value)
  }
  return (
    <div className='sort'>
      <select name="sort" id='sort' value={sortValue} onChange={handleClick}>
        <option value="">Sort by...</option>
        <option value="alphabetical">Alphabetical</option>
        <option value="size">Size</option>
        <option value="population">Population</option>
      </select>
    </div>

  )
}

export default Sort