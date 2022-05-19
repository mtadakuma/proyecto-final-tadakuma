import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  
  return (
    <div className='item-card' key={item.key}>
        <h3>{item.name}</h3>
      <img src={item.img} alt={item.name} />
     <Link to={`/item/${item.id}`}><button className='item-card-detail-btn'>Ver detalle</button></Link>
    </div>
  )
}

export default Item