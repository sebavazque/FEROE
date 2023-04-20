import React from 'react'
import './CSS/Checkout.css'
import { addDoc, collection, increment, writeBatch , doc} from "firebase/firestore";
import { dbFirebase } from "./Firebase";
import { useAppContext } from './CartContext'
import { useEffect } from "react";
import { toast } from "react-toastify";
import Form from './Form';

const Checkout = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
    const {cart,setCart,totalPrice} = useAppContext() 



  return (
    <div className='page-checkout' >
        <Form />
    </div>
  )
}

export default Checkout