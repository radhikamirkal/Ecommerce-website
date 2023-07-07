import React, {  useContext } from "react";

import { useParams } from "react-router-dom";
import ProductDetailsContext from "../../../../store/productDetailsContext/ProductDetailsContext";
import Comments from "./Comments";
function ProductDetails() {
  const params = useParams();
  const { detailsObj } = useContext(ProductDetailsContext);
  console.log(detailsObj);
  console.log(params);
  return (
    <div className="container mb-5   border border-3 shadow p-2" style={{marginTop:'8%'}}>
      <div className="row d-flex flex-row  ">
        <img className="col-5  m-1 shadow" src={detailsObj.url} alt="product " />

        <div className="col-6 ">
          <p className="fw-bold fs-5">Product : {detailsObj.title}</p>
          <p className="fw-bold fs-5">Price : ${detailsObj.price}</p>

          <div className="d-flex fw-bold fs-6  mb-3 flex-row justify-content-between w-100 ">
            <p className="fw-bold  ">Specifications:</p>

            {detailsObj.specifications?.size && <span className="ms-3 w-50">
              size: {detailsObj.specifications?.size}

            </span>}
            {detailsObj.specifications?.format && <span className="ms-3 w-50">
              Format: {detailsObj.specifications?.format}

            </span>}
            {detailsObj.specifications?.color && <span className="ms-3 w-50">
              Color: {detailsObj.specifications?.color}

            </span>
            }
            {detailsObj.specifications?.genre && <span className="ms-3 w-50">
              Genre: {detailsObj.specifications?.genre}

            </span>
            }
            {detailsObj.specifications?.material && <span className="ms-3 w-100">
              Material: {detailsObj.specifications?.material }
            </span>}

            {detailsObj.specifications?.releaseDate && <span className="ms-3 w-100">
              Material: {detailsObj.specifications?.releaseDate }
            </span>}
          </div>

          <p className="fw-bold">Seller : {detailsObj?.seller}</p>
          <p className="fw-bold">Warranty: {detailsObj?.warranty}</p>
          <hr class="my-4 " />
          <p className="fw-bold  ">Reviews & Ratings:</p>
          <div className="d-flex flex-column ">
            {detailsObj.reviews?.map((review) => {
              return <Comments data={review} />;
            })}
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-end p-2">
        <button class="col-2 m-1  rounded rounded-5 bg-warning">Buy Now</button>
        <button class="col-2  m-1 rounded rounded-5 bg-warning">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
