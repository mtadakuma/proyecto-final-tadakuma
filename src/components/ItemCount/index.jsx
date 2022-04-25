import React, { useState, useEffect } from 'react'
import './ItemCount.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const ItemCount = ({ stock, initial, onAdd}) => {

    const [count, setCounter] = useState(1);

    useEffect(() => { 
        setCounter(initial)
        return () => {}
    }, [])

    useEffect(() => { 
        return () => {}
    }, [count])

    

    return (
        <div className='item'>
            <p>Camisa Tiger</p>
            <div className='counter-controls'>
                <FontAwesomeIcon icon={faPlus} onClick={()=> count < stock ? setCounter(count + 1) : count }/>
                <p className='counter'>{ count }</p>
                <FontAwesomeIcon icon={faMinus} onClick={()=>count > 0 ? setCounter(count - 1) : count }/>
            </div>
            <button className='add-items' onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount