import React, {useState, useEffect , useContext} from 'react'
import './Cart.css'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom'


const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart-container'>
      {cartCtx.products.length > 0 ? 
        <div className='cart-items'>
          {
          cartCtx.products.map((item) =>
            <div className='cart-item'>
              <div className='item-det'>
                <h2>{item.name}</h2>
                <img src={item.img} alt={item.name} />
              </div>
              <div className='cart-item-controls'>
                <button onClick={()=>cartCtx.removeItem(item.id)} className='cart-item-minus'>-</button>
                <p>{item.quantity}</p>
                <button onClick={()=>cartCtx.addProduct(item, 1)} className='cart-item-plus'>+</button>
              </div>
              <h2>${item.quantity * item.price}</h2>
            </div>)
          }
          <h3>Total a pagar: ${cartCtx.getTotalValue()}</h3>
          <button onClick={()=>cartCtx.clear()} className='cart-clear-btn'>Vaciar carrito</button>
        </div>
        :
        <div>
          <h2>No hay productos agregados al carrito :(</h2>
          <h3>Puedes agregar alguno desde <NavLink to={'/'} className='cart-return'>aquí</NavLink></h3>
        </div>
    }
      
    </div>
    
  )
}

export default Cart