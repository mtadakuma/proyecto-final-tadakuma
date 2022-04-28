import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList'

function getItems() { 
    /* Mi fábrica de promesas */
        const myPromise = new Promise((resolve, reject) => {
            const itemList = [
                { id: 1, name: 'random 1', img: 'https://picsum.photos/id/1/200' }
                , { id: 2, name: 'random 2', img: 'https://picsum.photos/id/2/200' }
                , { id: 3, name: 'random 3', img: 'https://picsum.photos/id/3/200' }
                , { id: 4, name: 'random 4', img: 'https://picsum.photos/id/4/200' }
                , { id: 5, name: 'random 5', img: 'https://picsum.photos/id/5/200' }
                , { id: 6, name: 'random 6', img: 'https://picsum.photos/id/6/200' }
            ]
            setTimeout(() => {resolve(itemList)}, 2000);
        })
    return myPromise;
}

function ItemListContainer(props) {

    const [items, setItems] = useState([]);

    useEffect(() => { 
        getItems()
            .then(res => { setItems(res) })
            .catch(err => { console.error(err) });
    }, [])

    return (
        <div className='item-list-container'>
            {props.texto ? <p>{props.texto}</p> : null}
            <ItemList itemList={ items }/>
        </div>
    );
}

export default ItemListContainer;