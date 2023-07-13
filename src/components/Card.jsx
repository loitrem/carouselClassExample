import React from 'react'

function Carousel(props) {
  return (
    <div className='card'>
      <img className='cardImg' src={props.images} />
    </div>
  )
}

export default Carousel