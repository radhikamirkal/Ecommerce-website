import React, { useState } from 'react'
import ProductDetailsContext from './ProductDetailsContext'

function ProductDetailsContextProvider(props) {
    const [detailsObj, setDetailsObj] = useState({})

    const updateTheDetailsObj = (obj) => {
        setDetailsObj(obj)
    }
    return (
        <ProductDetailsContext.Provider value={{ detailsObj, updateTheDetailsObj }}>{props.children}</ProductDetailsContext.Provider>
    )
}

export default ProductDetailsContextProvider