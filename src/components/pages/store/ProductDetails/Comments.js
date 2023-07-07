import React from "react";
import userImg from '../../../assets/user.png'
function Comments(props) {
  console.log(props);
  return (
    <div className="border  mb-2 fw-black shadow">
      <div className=" d-flex flex-row align-items-center justify-content-around ">
        <div className="d-flex flex-column " style={{width:'10%'}}><img src={userImg}/> <p>Unknown</p></div>
        <span>Rating:{props.data?.rating}</span> {props.data?.comment}
      </div>
    </div>
  );
}

export default Comments;
