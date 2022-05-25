import React, { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import {collection, addDoc, getFirestore } from 'firebase/firestore';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom'
import './Checkout.css'

const Checkout = () => {

  /* { buyer: { name, phone, email }, items: [{ id, title, price, amount }], date, total  }  */

  const cartCtx = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    Nombre: '',
    Email: '',
    Telefono:''
  })

  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState()


  const { Nombre, Email, Telefono } = buyer;

  const handleInputChange = (e) => {
    setBuyer(({
      ...buyer, 
      [e.target.name]: e.target.value
    }))
  }

  
  const generateOrder = async (data) => {

    setIsLoading(true)
    
    try {
      const db = getFirestore();
      const col = collection(db, 'orders');
      const order = await addDoc(col, data);
      setOrderId(order.id);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      cartCtx.clear();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const dia = new Date()    
    const items = cartCtx.products.map(prod => { return { id: prod.id, title: prod.name, price: prod.price, amount: prod.quantity } });
    const total = cartCtx.getTotalValue();
    const data = { buyer, items, dia, total }
    console.log("data", data);
    generateOrder(data);
    
  }


  return (
    <>
      
      {isLoading ? <Loader/> :
        (!orderId && <div className='checkout-cont'>
        <h2 className='checkout-title'>Finalizando Compra</h2>
        <hr />
        <h4 className='checkout-subtitle'>Completar datos:</h4>
        <br />

        <form onSubmit={handleSubmit} className='checkout-form'>
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre"
            value={Nombre}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={Email}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="number"
            name="Telefono"
            placeholder="Telefono"
            value={Telefono}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="submit"
            value="Finalizar Compra"
            className="checkout-finish-btn"
          />
          <br /><br />
        </form>
        </div>)}
      <div>
        {
          orderId && <div className='checkout-cont'>
            <h4>Compra Finalizada con Exito</h4>
            <h4>Aqui está su ID de orden: <span className='order-id'>{orderId}</span></h4>
            <Link to={"/"}><button className='other-purchase-btn'>Realizar otra compra</button></Link>
          </div>
        }
      </div>
    </>
  )
}

export default Checkout