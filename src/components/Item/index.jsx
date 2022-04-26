import React from 'react'
import './Item.css'
const Item = ({ item }) => {
  return (
      <div className='item-card'>
          <p>{item.name}</p>
          <img src={ item.img}/>
    </div>
  )
}

export default Item