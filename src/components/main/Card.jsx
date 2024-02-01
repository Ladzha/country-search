import React from 'react'

const Card = ({country}) => {
  return (
    <div className='card'>
      <img src='' title={`Flag of ${'country name'}`} alt= {`Flag of ${'country name'}`} />
      <h3 className='name'>{'country name'}</h3>
      <div className='info'>
        <p><span className='bold'>Capital: </span>{'capital'}</p>
        <p><span className='bold'>Population: </span>{'population'}</p>
        <p><span className='bold'>Size: </span>{'size'}</p>
        <p><span className='bold'>Religion: </span>{'religion'}</p>

      </div>
      
      {country}
    </div>
  )
}

export default Card