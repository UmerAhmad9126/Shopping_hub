import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

    const [cartCount, setCartCount] = useState(0);


    const hnadleCartCount = (val) => {
        setCartCount(cartCount + val)
    }


    return (
        <CartContext.Provider value={{ cartState:cartCount, hnadleCartCount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
