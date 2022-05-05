import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import ItemCount from '../ItemCount'
import './ItemDetail.css'


const ItemDetail = ({ itemDetails }) => {

  const [cantProductos, setCantProductos] = useState(null);
  const onAdd = (totalCount) => { 
    alert(`La cantidad final es ${totalCount}`);
    setCantProductos(totalCount);
  }
  return (
      <div className='item-detail-cont'>
      <img src={itemDetails.img} alt={ itemDetails.name}/>
          <div className='item-detail'>
            <p>{itemDetails.name}</p>
            <p>{itemDetails.desc}</p>
        <ItemCount stock={itemDetails.stock} initial={1} onAdd={onAdd} />
        { cantProductos > 0 ? <NavLink to='/cart' className='finish-buying-container'><button class='finish-buying-btn'>Terminar compra</button></NavLink> : null}
          </div>
    </div>
  )
}

export default ItemDetail