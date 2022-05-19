import React, { useState, useContext } from 'react'
import { NavLink} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import ItemCount from '../ItemCount'
import './ItemDetail.css'



const ItemDetail = ({ itemDetails }) => {

  const [cantProductos, setCantProductos] = useState(null);
  const onAdd = (quantityToAdd) => { 
    setCantProductos(quantityToAdd);
    cartCtx.addProduct(itemDetails, quantityToAdd)
  }
  
  const onRemove = () => { 
    cartCtx.removeItem(itemDetails.id);
  }

  const onClear = () => { 
    cartCtx.clear();
  }

  const onShowCart = () => { 
    cartCtx.showCart();
  }
  
  /* Test para eliminar/limpiar y mostrar el carrito */
  const cartCtx = useContext(CartContext);

  return (
      <div className='item-detail-cont'>
      <img src={itemDetails.img} alt={ itemDetails.name}/>
          <div className='item-detail'>
            <p>{itemDetails.name}</p>
            <p>{itemDetails.desc}</p>
        <ItemCount stock={itemDetails.stock} initial={1} onAdd={onAdd} />
        {cantProductos > 0 ?
          <NavLink to='/cart' className='finish-buying-container'>
            <button className='finish-buying-btn'>Terminar compra</button>
          </NavLink> :
          null}
        <button onClick={onRemove}>Eliminar prod</button> 
        <button onClick={onClear}>Limpiar carrito</button> 
        <button onClick={onShowCart}>Mostrar carrito</button>  
        {/* Test para eliminar/limpiar y mostrar el carrito */}
          </div>
    </div>
  )
}

export default ItemDetail