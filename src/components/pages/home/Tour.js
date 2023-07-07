import React,{useState,useEffect} from 'react'

import './Tour.css'
function Tour(props) {
const [date,setDate] = useState('null')

useEffect(()=>{
    if(props.date){
        const formattedDate = props.date.toLocaleDateString("en-US", {
          
            month: "short",
            day: "numeric"
          });
          setDate(formattedDate); // Output: Jul 16, 2023
    }
},[])
   
   
  return (
    <div className=' tour  bg-light w-75 d-flex justify-content-center'>
        <div className='h-100 w-75 d-flex justify-content-between fw-bold '>
            <span className=''>{date}</span>
            <span className=''>{props.location}</span>
            <span className=''>{props.venue}</span>
            <button className='btn bg-dark text-light'>Buy Tickets</button>
        </div>
    </div>
  )
}

export default Tour