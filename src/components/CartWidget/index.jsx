import React, {useState, useEffect , useContext} from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../context/CartContext'
import { NavLink } from 'react-router-dom';


function CartWidget() {
    const cartCtx = useContext(CartContext);

    return (
        <NavLink to={'/cart'} className='cart-logo'>
            <div className='cart'>
                <FontAwesomeIcon icon={faCartShopping} />
                {cartCtx.products.length != 0 &&
                    <div className='bubble'>{cartCtx.getCartQuantity()}</div>
                }
            </div>
        </NavLink>
        
    );
}

export default CartWidget;