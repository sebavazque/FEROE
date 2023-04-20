import {Link} from 'react-router-dom'
import { useState } from 'react';
import { BsCart4 } from "react-icons/bs";
import LOGO from './CSS/FOTOS/LOGO.png'
import { useAppContext } from './CartContext'
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";

function Header () {
    const [menu, setMenu] = useState(false);
    const [burger, setBurger] = useState(false)
    const {cantidadTotal} = useAppContext() 


    const cambiarMenu = () => {
        if(window.scrollY > 100){
            setMenu(true);
        }else{
            setMenu(false);
        }
    }

    window.addEventListener('scroll', cambiarMenu);



    function handleClick(){
        setBurger(burger => !burger);
    }

    let changeClass = burger ? 'active' : 'menuBurger'; 
    let changeClass2 = burger ? 'active2' : 'menuBurger'; 
    let changeBurger = burger ? 'ac' : 'dropbtn';


    return (
        <header className={menu ? 'headerScroll' : 'header' } > 
                <div className='nav-container'>
                        <nav className='nav' >  
                            <div className='nav-content'>           
                                <button className={`${changeBurger}`}  onClick={handleClick}>
                                    <span className='line1'></span>
                                    <span className='line2'></span>
                                    <span className='line3'></span>
                                </button>
                                
                                <div className={`${changeClass}`} >
                                    <ul>
                                        <li><Link to='/'>Inicio</Link></li>
                                        <li><Link to='/productos'>TIENDA</Link></li>
                                        <li><Link to='/contacto'>Contacto</Link></li>
                                        <li><a href='https://www.instagram.com/weareferoe/'><AiOutlineInstagram className='instaNav'/> </a> </li>
                                        <li><a href='https://wa.me/3413667323'><AiOutlineWhatsApp className='instaNav'/></a></li>
                                    </ul>
                                    

                                </div>
                                <div className={`${changeClass2}`}></div>
                            
                            </div> 
                            <Link to='/'><img src={LOGO} className="logo" /></Link>

                            <Link to='/carrito'><BsCart4  className='logoCart'/><span>{cantidadTotal}</span> </Link>

                        </nav>


                </div> 
        </header>


    )
}

export default Header