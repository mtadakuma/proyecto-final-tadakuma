import React from 'react';
import './ItemListContainer.css'

function ItemListContainer(props) {
    return (
        <div className='item-list'>
            <p>{props.texto}</p>
            { props.children }
        </div>
    );
}

export default ItemListContainer;