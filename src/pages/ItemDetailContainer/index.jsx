import React, { useState, useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/index'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const { id } = useParams();
    
    function getItem(id) { 
    /* Mi fábrica de promesas */
        const myPromise = new Promise((resolve, reject) => {
            const itemDetails =
            [
            {
                id: 1
                , name: 'random 1'
                , img: 'https://picsum.photos/id/1/200'
                , stock: 5
                , price: 100
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
                }
            , {
                id: 2
                , name: 'random 2'
                , img: 'https://picsum.photos/id/2/200'
                , stock: 5
                , price: 100
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 3
                , name: 'random 3'
                , img: 'https://picsum.photos/id/3/200'
                , stock: 5
                , price: 100
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 4
                , name: 'random 4'
                , img: 'https://picsum.photos/id/4/200'
                , stock: 5
                , price: 100
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 5
                , name: 'random 5'
                , img: 'https://picsum.photos/id/5/200'
                , stock: 5
                , price: 100
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            , {
                id: 6
                , name: 'random 6'
                , img: 'https://picsum.photos/id/6/200'
                , stock: 5
                , price: 100
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
                ]
            const item = itemDetails.filter((item) => item.id === parseInt(id))[0];
            setTimeout(() => {resolve(item)}, 2000);
        })
    return myPromise;
    }
    
    const [itemDetails, setitemDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => { 
        setIsLoading(true);
        getItem(id)
            .then(res => { setitemDetails(res) }) 
            /* compara el id de los objetos con el id pasado por parametro en la URL y devuelve sólo el objeto dentro del array */
            .catch(err => { console.error(err) })
            .finally(() => { setIsLoading(false)})
    }, [id]) 

    return (
        
    <div className='item-detail-container'>
            {isLoading ? <Loader /> : <ItemDetail itemDetails={itemDetails} />}
    </div>
  )
}

export default ItemDetailContainer