import React from 'react'
import Item from '../Item'


const ItemList = ({ itemList }) => {
    return (
        itemList?.map(item => <Item item={item} key={item.id}/>)
    )
}

export default ItemList