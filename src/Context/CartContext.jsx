import React, {createContext, useState, useContext} from 'react'

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)


export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = ( objetItem ) =>{
        setCartList([
            ...cartList , objetItem
        ])
    }

    return (
  

        

        <CartContext.Provider value={{cartList : cartList, addToCart}} >
                {children}
        </CartContext.Provider>
        


    )
}


