import React,{useState,useContext} from "react";
import "./ProductBody.css";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./Product";
import {Button} from "react-bootstrap";
import CartOpenContext from "../../../store/cartOpenContext/CartOpenContext";

const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    category: "music",
    reviews: [
      { rating: 4, comment: "Great album!" },
      { rating: 5, comment: "Highly recommended!" }
    ],
    seller: "Music Store Inc.",
    warranty: "1 year",
    specifications: {
      format: "CD",
      genre: "Pop",
      releaseDate: "2022-05-15"
    }
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    category: "music",
    reviews: [
      { rating: 3, comment: "Decent album." },
      { rating: 4, comment: "Good mix of songs." }
    ],
    seller: "Music Emporium",
    warranty: "6 months",
    specifications: {
      format: "Vinyl",
      genre: "Rock",
      releaseDate: "2023-01-20"
    }
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    category: "music",
    reviews: [
      { rating: 5, comment: "Amazing collection!" },
      { rating: 4, comment: "Impressive artwork." }
    ],
    seller: "Music World",
    warranty: "None",
    specifications: {
      format: "Digital Download",
      genre: "Electronic",
      releaseDate: "2023-03-05"
    }
  },
  
  {
    id: 7,
    title: "t-shirt",
    price: 40,
    imageUrl: "https://source.unsplash.com/WWesmHEgXDs",
    category: "merchandise",
    reviews: [
      { rating: 5, comment: "Great shirt!" },
      { rating: 4, comment: "Good quality." }
    ],
    seller: "Merchandise Store Inc.",
    warranty: "1 year",
    specifications: {
      size: "S",
      color: "Black",
      material: "Cotton"
    }
  },
  {
    id: 8,
    title: "top",
    price: 15,
    imageUrl: "https://source.unsplash.com/pFPvIlth4ec",
    category: "merchandise",
    reviews: [
      { rating: 3, comment: "Decent shirt." },
      { rating: 4, comment: "Good quality." }
    ],
    seller: "Merchandise Emporium",
    warranty: "6 months",
    specifications: {
      size: "M",
      color: "White",
      material: "Polyester"
    }
  },
  
];




function ProductBody() {
const {updateIsCartOpen} = useContext(CartOpenContext)
const [isTrue,setIsTrue] = useState(false)

const cartOpenButtonClickHandler= ()=>{
  updateIsCartOpen(!isTrue);
  setIsTrue(!isTrue)
}
  
  return (
    <div className="parentDiv  " >
   
      <section className="sectionStyle">
        <h2 className="" style={{ marginLeft: "43%", marginBottom: "-3%" }}>
          MUSIC
        </h2>
        <Container fluid className="w-100 productBody p-5 rounded mt-0">
          <Row className="d-flex justify-content-center align-item-center">

            {productsArr.map((product) => {
              return product.category === 'music' ? (
                <Col key={product.id} xs={3} className="m-3">
                  <Product id={product.id} title={product.title} price={product.price} url={product.imageUrl} specifications={product.specifications} reviews={product.reviews} seller={product.seller} warranty={product.warranty} />
                </Col>
              ) : null;
            })}

          </Row>
        </Container>
      </section>
      <section className="sectionStyle">
        <h2 className="" style={{ marginLeft: "43%", marginBottom: "-3%" }}>
          MERCH
        </h2>
        <Container fluid className=" productBody p-5 rounded mt-0">
          <Row className="d-flex justify-content-center align-item-center">

          {productsArr.map((product) => {
              return product.category === 'merchandise' ? (  
                <Col key={product.id} xs={3} className="m-3">
                  <Product title={product.title} price={product.price} url={product.imageUrl} specifications={product.specifications} reviews={product.reviews} seller={product.seller} warranty={product.warranty}/>
                </Col>
              ) : null;
            })}

          </Row>
        </Container>

      </section>
     
     <Button onClick={cartOpenButtonClickHandler}  className="text-info cartBtn mt-2 " variant="dark">
          See Cart
        </Button>
    </div>
  );
}

export default ProductBody;
