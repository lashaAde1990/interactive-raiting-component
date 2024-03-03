import './App.css'
import Rate from './components/rate/Rate';
import { useState } from 'react';
import Rezult from './components/rezult/Rezult';

function App() {
const [submit,setSubmit]=useState(false);
const [rate,setRate]=useState(null)
  return (
    <>
    {submit?<Rezult rate={rate}/>:<Rate setSubmit={setSubmit} rate={rate} setRate={setRate}/>}
    </>
  )
}

export default App
