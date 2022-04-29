import React, { useState } from 'react'
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const addCount = (count) => { 
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const decreaseCount = (count) => { 
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='item'>
            <div className='counter-controls'>
                <FontAwesomeIcon icon={faPlus} onClick={()=> addCount(count)}/>
                <p className='counter'>{ count }</p>
                <FontAwesomeIcon icon={faMinus} onClick={()=> decreaseCount(count)}/>
            </div>
            <button className='add-items' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount