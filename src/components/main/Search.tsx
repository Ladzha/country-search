import useInput from '../../assets/hooks/useInput'



const Search = ({onFilter}) => {

  const input =useInput()

  onFilter(input.value)

  console.log(input.value);

  return (
    <>
      <input type="text" 
      placeholder={"Search for a country..."} 
      {...input}/>
    </>
  )
}

export default Search