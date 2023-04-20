import React from 'react'
import { useAppContext } from './CartContext'
import { Link } from 'react-router-dom';
import './CSS/Carrito.css'
import { BiXCircle } from "react-icons/bi";
import BannerShop from './BannerShop';
import BannerComodin from './BannerComodin';




const Carrito = () => {

    const {cart, removeItem,totalPrice} = useAppContext() 

        return  (

                <div className='carrito'>
                    <BannerComodin/>
                    <div className='cart-colum'>
                        <div className='cart-containter'>
                            <h2>TU CARRITO</h2>
                            <div className='cart-content'>
                                    
                                    <div className='cart'>                                                               
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td><h4>PRODUCTO</h4></td>                                     
                                                        <td><h4>CANTIDAD</h4></td>
                                                        <td id='td3'><h4>SUBTOTAL</h4></td>
        
                                                    </tr>
                                                </thead>   
                                                {cart.map((item) =>                               
                                                    <tbody>                                                                           
                                                        <tr key={item.id} >
                                                            <td> <BiXCircle onClick={() => removeItem(item.id)} className='btnDelete'/><img src={item.img} alt="" /><h4>{item.titulo} </h4><h4 className='talle-h4'>{item.selectedSize}</h4> <h4>${item.precio}</h4> </td>
                                                            <td><h4>{item.quantity}</h4></td>
                                                            <td id='td3'><h4>${item.precio * item.quantity}</h4></td>
                                                        </tr>                                            
                                                    </tbody>
                                                )}
                                                <h3>Los pedidos se retiran por Barrio Martin (Rosario) o se pueden coordinar envios por cadeteria a cargo del cliente.</h3>                
                                                    
                                            </table>
                                    </div>
                            </div>
                        </div>
                                                    
                        <div className='checkout'>
                            <div className='subtotal'>
                                <h4>Total del pedido:</h4>
                                <h4>${totalPrice}</h4>
                            </div>
        
                            <button className="btnPagar"  > <Link to="/checkout" ><h4>FINALIZAR COMPRA</h4></Link></button> 
                        </div>
                
                    </div>
                </div>

            
        )
    
}

export default Carrito