import { useState } from 'react';
import './rate.css'
import  star from '/images/icon-star.svg';

export default function Rate({setSubmit,rate,setRate}){
    let button =[1,2,3,4,5];
    
    console.log(rate)
    return (
        <>
        <div className='parent'>
            <img src={star} className='star'/>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className='button-container'>{button.map((button,index)=><button className='rate' 
            onClick={()=>setRate(button)} 
            key={index} 
            style={rate==button?{backgroundColor:'#7C8798'}:{}}
            >{button}</button>)}</div>
            <button className='submit' onClick={()=>{rate && setSubmit(true)}} >submit</button>
        </div>
        </>
    )
}
