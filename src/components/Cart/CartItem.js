import React,{useContext} from "react";
import "./CartItem.css";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cartContext/CartContext";

function CartItem(props) {
    const {updatedArray} = useContext(CartContext)

  const removeItemHandler = (e) => {
   
    let parentDiv = e.target.closest(".parentDiv").parentElement;

    let currentEl = e.target.closest(".parentDiv");
    
        parentDiv.removeChild(currentEl);

 
   
    for(let i = 0; i<updatedArray.length; i++){
    
      if(updatedArray[i].title === props.title){
        console.log('updatedArray.title=' ,updatedArray[i].title , 'props.title=', props.title)
        for(let j = i ; j<updatedArray.length; j++){
          updatedArray[j] = updatedArray [j + 1] 
        }
        updatedArray.pop() 
      }
    }
   
    console.log(updatedArray)
  };
 
  return (
    <div className=" parentDiv cartItem d-flex justify-content-between fw-bold fs-5 p-4">
      <span className="imgItem">
        <img className="item " src={props.imgUrl} />
        <span className="imgItem fs-6 ">{props.title}</span>
      </span>
      <span className="item">${props.price}</span>
      <div>
        <span className="item "> {props.quantity}</span>
        <Button onClick={removeItemHandler} className="rmBtn">
          Remove
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
