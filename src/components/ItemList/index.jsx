import React from 'react'
import Item from '../Item'


const ItemList = ({ items }) => {
    return (
        items?.map((item, key) => <Item item={item} key={key}/>)
    )
}

export default ItemList