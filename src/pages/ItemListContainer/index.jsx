import React, { useState, useEffect } from 'react';
import './ItemListContainer.css'
import ItemList from '../../components/ItemList'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

function getItems(categoryId) { 
    const db = getFirestore();
        
    const itemsCollection = collection(db, 'items');

    const q = categoryId && query(
        itemsCollection,
        where('category', '==', categoryId)
    )
    return getDocs(q || itemsCollection);
}

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { categoryId } = useParams();

    
    useEffect(() => {
        setIsLoading(true);
        getItems(categoryId)
            .then(snapshot => {
                setItems(snapshot.docs.map(
                    doc => { return { ...doc.data(), id: doc.id }}
                ))
            })
            /* busca si paso categoría como parámetro, si lo hace compara el nombre de categoría de los objetos con el nombre pasado por parametro en la URL y devuelve sólo los objetos dentro del array, sino muestra todos los productos */
            .catch(err => { alert('There has been an error while loading the items: '+ err)})
            .finally(() => { setIsLoading(false)})
    }, [categoryId])


    return (
        <div className='item-list-container'>
            {props.texto ? <p>{props.texto}</p> : null}
            {isLoading ? <Loader/> : <ItemList items={items} />}
        </div>
    );
}

export default ItemListContainer;