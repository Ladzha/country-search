import useInput from '../../../hooks/useInput'

const Search = ({onSearchChange}) => {

  const {value, onChange} =useInput()

  const handleChange=(event)=>{
    onChange(event)
    onSearchChange(event.target.value)
  }

  return (
    <>
      <input type="text" 
      placeholder={"Search for a country..."} 
      className='input-search'
      value={value}
      onChange={handleChange}
      />
    </>
  )
}

export default Search