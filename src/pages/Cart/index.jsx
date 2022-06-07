import React, { useContext} from 'react'
import './Cart.css'
import CartContext from '../../context/CartContext'
import { Link, NavLink } from 'react-router-dom'


const Cart = () => {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart-container'>
      {cartCtx.products.length > 0 ? 
        <div className='cart-items'>
          {
          cartCtx.products.map((item) =>
            <div className='cart-item' key={item.id}>
              <div className='item-det'>
                <h2>{item.name}</h2>
                <div className='item-det-img'>
                  <img src={item.img} alt={item.name} />
                </div>
                
              </div>
              <div className='cart-item-controls'>
                <button onClick={()=>cartCtx.removeItem(item.id)} className='cart-item-minus'>-</button>
                <p>{item.quantity}</p>
                <button onClick={()=>cartCtx.addProduct(item, 1)} className='cart-item-plus'>+</button>
              </div>
              <h2>${item.quantity * item.price}</h2>
            </div>)
          }
          <h3>Total: ${cartCtx.getTotalValue()}</h3>
          <button onClick={() => cartCtx.clear()} className='cart-clear-btn'>Clear Cart</button>
          <Link to='/checkout'>
            <button className='cart-finish-btn'>Finish buying</button>
          </Link>
        </div>
        :
        <div>
          <h2>There are no products on your cart :(</h2>
          <h3>You may add products from <NavLink to={'/'} className='cart-return'>here</NavLink></h3>
        </div>
    }
      
    </div>
    
  )
}

export default Cart