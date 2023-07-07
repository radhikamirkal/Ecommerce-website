import React,{useState} from 'react'
import CartContext from "./CartContext";


function CartContextProvider(props) {
    const [updatedArray,setUpdatedArray] = useState([])

   const updateTheValue = (newObj)=>{
    setUpdatedArray((prevArray)=>{
        return [ ...prevArray,newObj]
    })
   }
  return (
    <CartContext.Provider value={{updatedArray, updateTheValue}}>{props.children}</CartContext.Provider>
  )
}

export default CartContextProvider