import React,{useState} from "react";
import CartOpenContext from "./CartOpenContext";



const CartOpenContextProvider = (props) =>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const updateIsCartOpen = (trueOrFalse) =>{
        setIsCartOpen(!trueOrFalse)
    }
    return(
        <CartOpenContext.Provider value={{isCartOpen,updateIsCartOpen}}>
            {props.children}
        </CartOpenContext.Provider>
    )
}

export default CartOpenContextProvider;