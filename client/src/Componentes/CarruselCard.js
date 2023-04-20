import './CSS/Card.css'
import {Link} from 'react-router-dom'
import Carousel from "react-elastic-carousel";


const   CarruselCard = ({productos}) => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 1},
        { width: 800, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5}

      ];

    return (
        <div className='Card-allContainer'>
            
            <div >

                <Carousel breakPoints={breakPoints} focusOnSelect={true} > 

                    

                        {productos?.map((producto)=>
                            <div className="card-contenedor" >
                                <div className="card-contenido" >
                                    <div className="card-colum4"key={producto.id}>
                                        <Link to={`/${producto.categoria}/${producto.id}`}><img className='imgC' src={producto.img}/></Link>
                                    </div>
                                    <div className="card-colum5">
                                        <Link to={`/${producto.categoria}/${producto.id}`}><h2>{producto.titulo}</h2> </Link>

                                    </div>
                                    <div className="card-colum6">
                                        <h4>Total:</h4> 
                                        <h3>${producto.precio}</h3>
                                    </div>
                                    <button className='btnCarru'> <Link to={`/${producto.categoria}/${producto.id}`}>COMPRAR</Link> </button>
                                </div>
                            </div>

                        )}

                    
                </Carousel> 

            </div>
            
        </div>
    )    
}

export default  CarruselCard