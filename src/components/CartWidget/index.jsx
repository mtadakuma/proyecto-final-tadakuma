import React, {useState, useEffect , useContext} from 'react';
import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../context/CartContext'


function CartWidget() {
    const cartCtx = useContext(CartContext);

    return (
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping} />
            <div>{cartCtx.getCartQuantity()}</div>
            
        </div>
    );
}

export default CartWidget;