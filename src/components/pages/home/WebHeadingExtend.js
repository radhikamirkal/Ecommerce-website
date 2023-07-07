import './WebHeadingExtend.css'
import React,{Fragment} from 'react'
import img from '../../assets/play-button.png'

function WebHeadingExtend() {
  return (
    <div className='headin  p-4'>
       <button className='btn bg-info w-4  fw-bold text-light ' style={{height:'3rem', width:'22rem'}}>  Get Latest Album</button>
       <button className='btn mt-1'><img className=' bg-info btnImg img rounded rounded-circle' src={img} /></button>
    </div>
  )
}

export default WebHeadingExtend