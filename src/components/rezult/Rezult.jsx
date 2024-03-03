import './rezult.css'
import  illustration from '/images/illustration-thank-you.svg'
export default function Rezult({rate}){
    return (
        <>
        <div className='parent-one'>
             <img src={illustration}/>
             <p className='choiced'>You selected {rate} out of 5</p>
             <h1>Thank you!</h1>
             <p className='thank'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>
        </>
    )
}