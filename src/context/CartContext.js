import React, { useState, createContext } from 'react'
/* import Cart from '../pages/Cart'; */

const CartContext = createContext({
    products: [],
    addProduct: () => { },
    removeItem: () => { },
    clear: () => { },
    showCart: () => { }
});

export const CartContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([])

    const addProduct = (product, quantity) => { 
        if (!isInCart(product.id)) {
            setProductList([...productList,{ product, quantity } ]);
            alert('Nuevo producto agregado al carrito.');
        } else if (findItem(product.id).quantity + quantity <= product.stock) {
            findItem(product.id).quantity += quantity;
            alert('Cantidad modificada.');
        } else { 
            alert('Stock es superior al stock del producto.');
        }
    }

    const findItem = (id) => { 
        return productList.find(({ product }) => product.id === id);
    }

    const isInCart = (id) => { 
        return findItem(id) ? true : false;
    }

    const removeItem = (itemId) => { 
        if (isInCart(itemId)) {
            setProductList(productList.filter(({ product }) => product.id !== itemId));
            alert('Producto Eliminado.');
        } else { 
            alert('Este producto no está en el carrito.')
        }
    }

    const clear = () => { 
        setProductList([]);
        alert('Carrito limpiado.');
    }

    const showCart = () => { 
        console.log(productList);
    }

    return (
        <CartContext.Provider value={{
            products: productList,
            addProduct,
            removeItem,
            clear,
            showCart
        }}>
            {children}
    </CartContext.Provider>
    )
}


export default CartContext;