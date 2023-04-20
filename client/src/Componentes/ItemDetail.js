import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./CartContext";
import { toast } from "react-toastify";
import ItemCounter from "./ItemCounter";
import './CSS/ItemDetail.css'
import BannerShop from './BannerShop';
import { useEffect } from 'react'
import TalleS from "./TalleS";


const ItemDetail = ({producto}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const [add , setAdd] = useState(false) 
    const [adde , setAdde] = useState(false) 
    const [selectedSize, setSelectedSize] = useState()
    const {addToCart} = useAppContext()
    const [image, setImage] = useState(false)
    const [imageMini, setImageMini] = useState(false)


    const onAdd = (numero) => {
        addToCart({item:producto, quantity:numero, selectedSize}) 
        console.log(selectedSize)
        setAdd(numero)
        }



    function handleClick(){
        setImage(image => !image);
    }

    function handleClickImg(){
        setImageMini(imageMini => !imageMini);
    }


    let openImage = image ?  'model open': 'item-colum1'
    let openMiniImage = imageMini ?  'modal abrir': 'mini'

    
    return (
    <div>

        <BannerShop/>


        <div className="detail-container">
            
            <div className="detail-content">
            
                <div className="item-container">
                    <div className="item-colum1">
                        <div className={`${openImage}`} >

                            <img onClick={() => handleClick()} className='imgDetail' src={producto.img} />

                        </div>   
                        <div className={`${openMiniImage}`}>
                                <img onClick={() => handleClickImg()} className='img2' src={producto.img2}/>
                                
                        </div>
                    </div>
                    
                    <div className="item-colum2">
                        <h2 className="h23">{producto.titulo}</h2>
                        <div className="line"></div>
                        <h3 className="h23">${producto.precio}</h3> 
                        
                        <div className="item-talle">
                        <h4>Talle</h4>
                            <h3>{selectedSize}</h3>
                        </div>
                        {
                        add ?
                            <div className="añadido-container">
                                <div>
                                    Añadido al carrito!
                                    <Link to="/carrito" > <button className='btnCart'> VER CARRITO</button> </Link>
                                </div>
                            </div>
                            
                            :
                            <div className='talles-container'>
                                <div className="sizes-container">
                                <button onClick={() => setSelectedSize('(S)')} className={ selectedSize === '(S)' ? 'button size-button selected' : 'button size-button'}>S</button>
                                    <button onClick={() => setSelectedSize('(M)')} className={ selectedSize === '(M)' ? 'button size-button selected' : 'button size-button'}>M</button>
                                    <button onClick={() => setSelectedSize('(L)')} className={ selectedSize === '(L)' ? 'button size-button selected' : 'button size-button'}>L</button>
                                    <button onClick={() => setSelectedSize('(XL)')} className={ selectedSize === '(XL)' ? 'button size-button selected' : 'button size-button'}>XL</button>
                                </div>
                                <ItemCounter  initial={1} onAdd={onAdd} />
                            </div>
                            
                            
                        }
                        
                    
                    
                    </div>
                    
                </div>
                <div className="descrip-content">
                    <h3 className="h23">{producto.titulo}</h3>
                    <p className="p">{producto.descripcion}</p>
                </div>
            </div>
        </div>

    </div>
    );
}

export default ItemDetail