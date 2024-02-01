import React from 'react';
import List from './List';
import Interaction from './Interaction';


const Main = () => {
  return (
    <main className='main'>
      <Interaction/>
      <List condition={'all'}/>
    </main>
  )
}

export default Main