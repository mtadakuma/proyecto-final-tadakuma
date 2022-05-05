import React from 'react'
import ItemCount from '../ItemCount'
import './ItemDetail.css'


const ItemDetail = ({ itemDetails }) => {

  const onAdd = (totalCount) => { 
    alert(`La cantidad final es ${totalCount}`);
  }
  return (
      <div className='item-detail-cont'>
      <img src={itemDetails.img} alt={ itemDetails.name}/>
          <div className='item-detail'>
            <p>{itemDetails.name}</p>
            <p>{itemDetails.desc}</p>
        <ItemCount stock={itemDetails.stock} initial={1} onAdd={onAdd}/>
          </div>
    </div>
  )
}

export default ItemDetail