import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList'
import { useParams } from 'react-router-dom';

function getItems() { 

    /* Mi fábrica de promesas */
        const myPromise = new Promise((resolve, reject) => {
            const itemList = [
                { id: 1, name: 'random 1', img: 'https://picsum.photos/id/1/200', category:'computers' }
                , { id: 2, name: 'random 2', img: 'https://picsum.photos/id/2/200', category:'computers' }
                , { id: 3, name: 'random 3', img: 'https://picsum.photos/id/3/200', category:'smartphones' }
                , { id: 4, name: 'random 4', img: 'https://picsum.photos/id/4/200', category:'smartphones' }
                , { id: 5, name: 'random 5', img: 'https://picsum.photos/id/5/200', category:'screens' }
                , { id: 6, name: 'random 6', img: 'https://picsum.photos/id/6/200', category:'screens' }
            ]
            setTimeout(() => {resolve(itemList)}, 2000);
        })
    return myPromise;
}

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const itemCategory = useParams();

    useEffect(() => { 
        getItems()
            .then(res => { itemCategory.category === undefined ? setItems(res) : setItems(res.filter((item) => item.category === itemCategory.category)) })
            /* busca si paso categoría como parámetro, si lo hace compara el nombre de categoría de los objetos con el nombre pasado por parametro en la URL y devuelve sólo los objetos dentro del array, sino muestra todos los productos */
            .catch(err => { console.error(err) });
    }, [itemCategory])

    return (
        <div className='item-list-container'>
            {props.texto ? <p>{props.texto}</p> : null}
            <ItemList itemList={ items }/>
        </div>
    );
}

export default ItemListContainer;