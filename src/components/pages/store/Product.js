import React, { Fragment, useContext, useState, } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import { Card, Button } from "react-bootstrap";
import CartContext from "../../../store/cartContext/CartContext";
import './Product.css'
import ProductDetailsContext from "../../../store/productDetailsContext/ProductDetailsContext";

function Product(props) {
  const myProps = props;
  const { updateTheValue } = useContext(CartContext);
  const [updatedQuantity, updateTheQuantity] = useState(1);
  const {updateTheDetailsObj} = useContext(ProductDetailsContext)

  const quantityUpdater = (e) => {
    updateTheQuantity(e.target.value)
  }
  const newObj = {
    ...props,
    updatedQuantity
  };

  const addToCartButtonHandler = () => {
    updateTheValue(newObj);

    updateTheQuantity(1)
  };

  const cardClickHandler = ()=>{
    updateTheDetailsObj(props)
   
  }
  return (
    <Link to={ `/store/${props.id}`} style={{textDecoration:'none'}} >
     
      <Card onClick={cardClickHandler} style={{ width: "18rem" }} className="  rounded-4 shadow-lg bg-light">
        <Card.Title className=" d-flex justify-content-center m-2">
          {props.title}
        </Card.Title>
        <Card.Img variant="top" src={props.url} className="cardImg p-2 rounded-4 " />
        <Card.Body className="d-flex  align-items-center  ">
          <Card.Text className="fw-bold fs-4">${props.price}</Card.Text>
          <form>
            <input onChange={quantityUpdater} value={updatedQuantity} type='number fw-bold' className="w-25  qty p-2"></input>
          </form>
          <Button className="addBtn" variant="primary" onClick={addToCartButtonHandler}>
            Add
          </Button>
        </Card.Body>
      </Card>
     
    </Link>
  );
}

export default Product;
