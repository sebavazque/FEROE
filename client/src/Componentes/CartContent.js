



import React from 'react'
import { useAppContext } from './CartContext'
import { Link } from 'react-router-dom';
import './CSS/Carrito.css'
import { BiXCircle } from "react-icons/bi";
import BannerShop from './BannerShop';
import Carrito from './Carrito';
import BannerComodin from './BannerComodin';



const CartContent = () => {

    const {cart, totalPrice} = useAppContext() 

    return  cart.length > 0 ? (
        <>
        <Carrito/>
            
        </>
            
        ) : (
            <div className='carrito'>
                <BannerComodin/>
                <div className='cart-colum'>
                    <div className='cart-containter'>
                        <h2>Tu carrito esta vacio!</h2>
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
                                                    </table>
                            </div>

                        </div>
                        <div className='checkout'>
                            <div className='subtotal'>
                                <h4>Total del pedido:</h4>
                                <h4>{totalPrice}</h4>
                            </div>
        
                            <button className="btnPagar"  > <Link to="/productos" ><h4>Ir a la tienda</h4></Link></button> 
                        </div>
                    </div>
                </div>
            </div>
        );

        
    
}

export default CartContent



