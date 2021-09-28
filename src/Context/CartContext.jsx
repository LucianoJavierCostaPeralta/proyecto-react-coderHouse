import React, { createContext, useState, useContext } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (objetItem) => {
        if (cartList.some(idex => idex.id === objetItem.id)) {

            cartList.find(idex => idex.id === objetItem.id).totalP +=(objetItem.cantidad * objetItem.precio)
            cartList.find(idex => idex.id === objetItem.id)
            setCartList(cartList)

        } else {
            
            setCartList([
                ...cartList, objetItem
            ])
        }
    }
    const clearList = () => cartList([])

    const formatoMoneda = (valor) =>
        valor.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        });

    return (
        <CartContext.Provider value={{
            cartList: cartList,
            addToCart,
            clearList,
            formatoMoneda
        }} >
            {children}
        </CartContext.Provider>
    )
}


