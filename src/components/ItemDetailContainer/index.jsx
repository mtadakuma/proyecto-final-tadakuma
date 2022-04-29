import React, { useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/index'

const ItemDetailContainer = () => {

    function getItem() { 
    /* Mi fábrica de promesas */
        const myPromise = new Promise((resolve, reject) => {
            const itemDetails =
            {
                id: 1
                , name: 'random 1'
                , img: 'https://picsum.photos/id/1/200'
                , stock: 5
                , desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum velit, autem, debitis omnis maiores quos accusamus ipsam et odio iusto unde repudiandae harum rem possimus odit atque veniam nulla.'
            }
            setTimeout(() => {resolve(itemDetails)}, 2000);
        })
    return myPromise;
}
    
    const [itemDetails, setitemDetails] = useState([]);

    useEffect(() => { 
        getItem()
            .then(res => { setitemDetails(res) })
            .catch(err => { console.error(err) });
    }, [])

    return (
    <div className='item-detail-container'>
            <ItemDetail itemDetails={itemDetails} />
    </div>
  )
}

export default ItemDetailContainer