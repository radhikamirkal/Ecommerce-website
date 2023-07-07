import React,{useContext} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CartBody.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cartContext/CartContext";



function CartBody() {
    const {updatedArray } = useContext(CartContext)

  const cartBodyClickHandler = (e) => {
    e.stopPropagation();
  };
  console.log(updatedArray)
  return (
    <Container  onClick={cartBodyClickHandler}>
      <Row>
        <Col xs={12} className="cartBody rounded rounded-4 border border-5">
          <p style={{ marginLeft: "30%" }} className="fs-2   fw-bold">
            Cart
          </p>

          <Container>
            <Row>
              <Col xs={8}>
                <div className=" d-flex justify-content-between fw-bold fs-5 p-4">
                  <span>Item</span>
                  <span>Price</span>
                  <span>Quantity</span>
                </div>
                <hr />

                {updatedArray.map((item) => (
                 
                  <CartItem
                    title={item.title}
                    imgUrl={item.url}
                    price={item.price}
                    quantity={item.updatedQuantity}
                    key={item.id}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default CartBody;
