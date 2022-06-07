import React, { useState, useContext } from 'react'
import { NavLink} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount'
import './ItemDetail.css'



const ItemDetail = ({ itemDetails }) => {

  const onAdd = (quantityToAdd) => { 
    cartCtx.addProduct(itemDetails, quantityToAdd)
  }
  const cartCtx = useContext(CartContext);

  return (
      <div className='item-detail-cont'>
      <img src={itemDetails.img} alt={ itemDetails.name}/>
          <div className='item-detail'>
            <p>{itemDetails.name}</p>
            <p>{itemDetails.desc}</p>
        <ItemCount stock={itemDetails.stock} initial={1} onAdd={onAdd} />
        {cartCtx.products.length > 0 &&
          <NavLink to='/cart' className='finish-buying-container'>
            <button className='finish-buying-btn'>Finish buying</button>
          </NavLink>}
          </div>
    </div>
  )
}

export default ItemDetail