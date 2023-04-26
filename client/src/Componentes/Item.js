import { Link } from "react-router-dom";
import './CSS/ListaProductos.css'
import BannerShop from './BannerShop'
import { AiOutlineWhatsApp} from "react-icons/ai";


const Item = ({productos}) => {
    
    return (
            <div className='lista-container'>
            <BannerShop></BannerShop>
            <a href='https://wa.me/3413667323'><AiOutlineWhatsApp className='whapFoot'/></a>
                <div className='lista-content'>

                {productos?.map((producto)=>
                    <div className="card-container" key={producto.id}>
                        <div className="card-content">
                            <div className="card-colum1">
                            <Link to={`/${producto.categoria}/${producto.id}`}><img className='img' src={producto.img} alt="" /></Link>
                            </div>
                            <div className="card-colum3">
                            <Link to={`/${producto.categoria}/${producto.id}`}><h2>{producto.titulo}</h2> </Link>

                            </div>
                            <div className="card-colum2">
                            <h4>Total:</h4> 
                            <h3>${producto.precio}</h3>
                            </div>
                            <button className='btnCom'> <Link to={`/${producto.categoria}/${producto.id}`}>Comprar</Link> </button>
                        </div>
                    </div>
                 )}
                            
                </div>
            </div>
            
    );
}

export default Item
