import React, { useState, useEffect} from 'react'
import ItemDetail from '../../components/ItemDetail/index'
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader';
import './ItemDetailContainer.css'
import { doc, getDoc, getFirestore } from 'firebase/firestore';


const ItemDetailContainer = () => {

    const { id } = useParams();
    
    function getItem(id) { 

        const db = getFirestore();

        const itemRef = doc(db, 'items', id);

        return getDoc(itemRef);
    }
    
    const [itemDetails, setitemDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => { 
        setIsLoading(true);
        getItem(id)
            .then(snapshot => {
                setitemDetails(
                {...snapshot.data(), id: snapshot.id}
            ) }) 
            /* compara el id de los objetos con el id pasado por parametro en la URL y devuelve sólo el objeto dentro del array */
            .catch(err => { alert('There has been an error while loading the details: '+ err) })
            .finally(() => { setIsLoading(false)})
    }, [id]) 

    return (
        
    <div className='item-detail-container'>
            {isLoading ? <Loader /> : <ItemDetail itemDetails={itemDetails} />}
    </div>
  )
}

export default ItemDetailContainer