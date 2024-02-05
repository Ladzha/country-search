import List from './List';
import Interaction from './Interaction';

const Main = () => {

  const filter = (filter)=>{
    console.log("MAIN: " + filter)
  }

  return (
    <main className='main'>
      <Interaction onFilter={filter}/>
      <List />
    </main>
  )
}

export default Main