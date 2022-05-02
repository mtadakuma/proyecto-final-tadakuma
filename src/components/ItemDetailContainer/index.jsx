import React, { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/index'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const itemId = useParams();
    
    function getItem() { 
    /* Mi fábrica de promesas */
        const myPromise = new Promise((resolve, reject) => {
            const itemDetails =
            [
            {
                id: 1
                , name: 'random 1'
                , img: 'https://picsum.photos/id/1/200'
                , stock: 5
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 2
                , name: 'random 2'
                , img: 'https://picsum.photos/id/2/200'
                , stock: 5
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 3
                , name: 'random 3'
                , img: 'https://picsum.photos/id/3/200'
                , stock: 5
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 4
                , name: 'random 4'
                , img: 'https://picsum.photos/id/4/200'
                , stock: 5
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 5
                , name: 'random 5'
                , img: 'https://picsum.photos/id/5/200'
                , stock: 5
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 6
                , name: 'random 6'
                , img: 'https://picsum.photos/id/6/200'
                , stock: 5
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
        ]
            setTimeout(() => {resolve(itemDetails)}, 2000);
        })
    return myPromise;
}
    
    const [itemDetails, setitemDetails] = useState([]);


    useEffect(() => { 
            getItem()
            .then(res => { setitemDetails(res.filter((item) => item.id === parseInt((itemId.id)))[0]) }) 
            /* compara el id de los objetos con el id pasado por parametro en la URL y devuelve sólo el objeto dentro del array */
            .catch(err => { console.error(err) });
    }, []) 

    return (
        
    <div className='item-detail-container'>
            <ItemDetail itemDetails={itemDetails} />
    </div>
  )
}

export default ItemDetailContainer