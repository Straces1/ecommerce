import { createContext, useContext, useState } from 'react'
// import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

const ShoppingCartContext = createContext(undefined);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }) {
    const [quantity, setQuantity] = useState(null)
    const [multiplier, setMultiplier] = useState(1)
    const [isOpen, setIsOpen] = useState(false)
   

    
     function addToCart() {
        setQuantity(quantity + 1 * multiplier)
     }

     function increment() {
        setMultiplier(multiplier + 1)
     }

     function decrement() {
        if (multiplier <= 1) 
        {
            return
        } else {setMultiplier(multiplier - 1)}
     }

     function clearCart() {
        setQuantity(null)
     }

     function getTotal() { //output of this function needs to be formated (two decimals)
        return 125.00 * quantity
     }


    return(
        <ShoppingCartContext.Provider
            value={{
                addToCart,
                increment,
                decrement,
                clearCart,
                multiplier,
                setMultiplier,
                quantity,
                isOpen,
                setIsOpen,
                getTotal,
             
              
            }}
        >
            {children}
            
        </ShoppingCartContext.Provider>
    )
}