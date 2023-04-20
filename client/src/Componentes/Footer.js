import LOGO from './CSS//FOTOS/LOGO.jpeg'
import './CSS/Styles.css'
import {Link} from 'react-router-dom'



function Footer () {

    return(
        <footer>
            <div className='footer-container'>
                <div className='footer-content'>
                    <img src={LOGO} className="logoFooter" alt=''/>
                </div>
                <div className='foot-info'>
                    <ul>
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/productos'>TIENDA</Link></li>
                        <li><Link to='/contacto'>Contacto</Link></li>
                        <li><a href='https://www.instagram.com/weareferoe/'>INSTAGRAM </a> </li>
                        
                    </ul>
                                    
                </div>
            </div>
        </footer>
    )
}

export default Footer