import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom';

function getItems(categoryId) { 

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

            const itemsFiltered = categoryId === undefined ? itemList : itemList.filter((item) => item.category === categoryId);
            setTimeout(() => {resolve(itemsFiltered)}, 2000);
        })
    return myPromise;
}

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => { 
        getItems(categoryId)
            .then(res => {setItems(res)})
            /* busca si paso categoría como parámetro, si lo hace compara el nombre de categoría de los objetos con el nombre pasado por parametro en la URL y devuelve sólo los objetos dentro del array, sino muestra todos los productos */
            .catch(err => { console.error(err) });
    }, [categoryId])

    return (
        <div className='item-list-container'>
            {props.texto ? <p>{props.texto}</p> : null}
            <ItemList itemList={items}/>
        </div>
    );
}

export default ItemListContainer;