import React from 'react'
import BannerComodin from './BannerComodin'
import './CSS/Checkout.css'
import { useAppContext } from './CartContext'
import { useState } from "react";
import {  Link,useNavigate } from 'react-router-dom';
import MP from './CSS/FOTOS/MP.png'
import MP2 from './CSS/FOTOS/MP2.png'
import { addDoc, collection, serverTimestamp} from "firebase/firestore";
import { toast } from "react-toastify";
import { dbFirebase } from "./Firebase";
import axios from 'axios'


const Form = () => { 
    
    // const [formData, setFormData] = useState({ name: '', email: '', celu: '', city: '', region: '', casa: '', depto:'', codigo:'' })
    const {cart,totalPrice,cleanCart} = useAppContext() 
    const orders = collection(dbFirebase, "Ordenes");
    const [loading, setLoading] = useState(false);
    const [ordenId, setOrdenId] = useState("");  
    const [buyer, setBuyer] = useState({
        name: "",
        celu: "",
        email: "",
        casa: "",
        region: "",
        city: "",
        cp: "",
      });
    
      const handleCheckout = (e) => {
        setBuyer({
          ...buyer,
          [e.target.name]: e.target.value,
        });
      };


    const handleConfirm= () => {
         setLoading(true);
        const items = cart.map (item => {
            
            return {
                cantidad: item.quantity,
                id: item.id,
                titulo: item.titulo,
                selectedSize: item.selectedSize,
                totalPrice,
            }
        })
    
            const order =  {
                items: items,
                fecha:  serverTimestamp(),
                buyer: { ...buyer },
    
        }
        
        addDoc(orders, order)
            .then((data) => {
                setOrdenId(data.id);
                // alert('Enviado')
                // cleanCart([]);
            })

    }


  return (
    <div className='page-checkout' >
    <BannerComodin/>
    <div className='check-container'>
        <div className='checkout-form'>
        <h1>Checkout</h1>

            <form >  

                <div className='checkBox'>
                    
                    <div className='inputCheck' id='w50'><span>Nombre y apellido </span>
                        <input type="text" name='name' onChange={handleCheckout} required value={buyer.name} />
                        
                    </div>

                    <div className='inputCheck' id='w50'><span>Correo</span>
                        <input type="email" name='email'onChange={handleCheckout} required value={buyer.email} />
                        
                    </div>
                    <div className='inputCheck' id='w50'><span>Celular</span>
                        <input type="text" name='celu'onChange={handleCheckout} required value={buyer.celu} />
                        
                    </div>
                    <div className='inputCheck' id='w50'><span>Region/Provincia</span>
                        <input type="text" name='region'onChange={handleCheckout} required value={buyer.region} />
                        
                    </div>
                    <div className='inputCheck' id='w50'><span>Ciudad</span>
                        <input type="text" name='city' onChange={handleCheckout} required  value={buyer.city}/>
                        
                    </div>                        
                    <div className='inputCheck' id='w50'><span>Domicilio</span>
                        <input type="text" name='casa'onChange={handleCheckout} required value={buyer.casa}/>
                        
                    </div>
                    <div className='inputCheck' id='w50'><span>Codigo Postal</span>
                        <input type="text" name='cp' required onChange={handleCheckout} value={buyer.cp} />
                        
                    </div>
                    
                </div>
            </form>
        </div> 
        <div className='table-container'  >
            <h4>TU CARRITO</h4>
            <table className='table-content' >
                    <thead>
                        <tr>
                            <td id='td1'><h4>PRODUCTO</h4></td> 
                            <td></td>                                    
                            <td><h4>SUBTOTAL</h4></td>
        
                        </tr>
                    </thead>   
                    {cart.map((item) =>                               
                        <tbody>                                                                           
                            <tr key={item.id} id='trLine' >
                                <td> <img className='imgCheck' src={item.img}/> <h4>{item.titulo} </h4> <h4>x</h4> <h4>{item.quantity}</h4> </td>
                                <td></td>
                                <td><h4>${item.precio * item.quantity}</h4></td>
                            </tr>        

                                 
                        </tbody>
                        
                    )} 
                          
           
            </table>
            <div className='mp-check'>                  
                        <h3>Los pedidos se retiran por Barrio Martin (Rosario) o se pueden coordinar envios por cadeteria a cargo del cliente.</h3> 
                        <h3>Mercado Pago <img src={MP2}/>  </h3>  
                        <img className='MP' src={MP}/>
                        <h3>Al confirmar tu compra, te redirigiremos a tu cuenta de Mercado Pago.</h3>
                   </div>   
            <div className='checkout'>
                        <div className='subtotal'>
                            <h3>Total del pedido:</h3>
                            <h3>${totalPrice}</h3>
                        </div>
                        <div>
                            
                            <form action="http://feroeee.onrender.com/payment" method='POST'>
                                <input type="hidden" name='title' value="FEROE"></input>
                                <input type="hidden" name='price' value={totalPrice} ></input>
                                <button type='submit' onClick={handleConfirm} className='btnPagar'><h4>COMPRAAAR</h4></button>
                            </form>
                        
                        </div>
                        <h3>su orden es {ordenId}</h3>

            </div>        
        </div>

    </div>
</div>
  )
}

export default Form
