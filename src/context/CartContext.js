import React, { useState, createContext } from 'react'
/* import Cart from '../pages/Cart'; */

const CartContext = createContext({
    products: [],
    addProduct: () => { },
    removeItem: () => { },
    clear: () => { },
    showCart: () => { },
    getCartQuantity: () => {}
});

export const CartContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([])

    const addProduct = (product, quantity) => { 
        if (!isInCart(product.id)) {
            setProductList([{ ...product, quantity } ,...productList,]);
        }  else if (findItem(product.id).quantity + quantity <= product.stock) {
            setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + quantity}: p));
        } 
        else { 
            alert('Superado el stock');
            console.log(productList);
        } 
    }

    const findItem = (id) => { 
        return productList.find((prod) => prod.id === id);
    }

    const isInCart = (id) => { 
        return findItem(id) ? true : false;
    }

    const removeItem = (itemId) => {
        if (productList.length !== 0 && findItem(itemId) && findItem(itemId).quantity <= 1) {
            setProductList(productList.filter((product) => product.id !== itemId));
        } else {
            setProductList(productList.map(p => p.id === itemId ? {...p, quantity: p.quantity - 1}: p));
        }
    }

    const clear = () => { 
        setProductList([]);
    }

    const showCart = () => { 
        console.log(productList);
    }

    const getCartQuantity = () => { 
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    } 

    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct,
            removeItem,
            clear,
            showCart,
            getCartQuantity
        }}>
            {children}
    </CartContext.Provider>
    )
}


export default CartContext;