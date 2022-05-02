import React from 'react'
import Item from '../Item'


const ItemList = ({ itemList }) => {
    return (
        itemList?.map((item, key) => <Item item={item} key={key}/>)
    )
}

export default ItemList