import { useState } from 'react';
import './CSS/ItemCounter.css'
const ItemCounter = ({initial,onAdd}) => {

    const [numero , setNumero] = useState(initial)
    const addToCart = () => {
        onAdd(numero)
    }
    
    
    const sumar = () => {
        if(numero){
            setNumero(numero + 1)
        }

    }
    const restar = () => {
        if(numero > initial){
            setNumero(numero - 1)
        }

    }

    return (
        <div className='btnCart-container'>
            <div className="contenedor2">
                <div className='carrito'>

                
                    <div className='canti'> <button className='btn-suma' onClick={sumar} >+</button>                       
                        <h3 className='numero'>{numero}</h3>
                        
                            <button className='btn-resta' onClick={restar}>-</button>
                    </div>    

                    
                    <div className='addCart'>
                        <button onClick={addToCart} className='btnCart'>
                            Agregar al carrito!
                        </button>    
                    </div>
                </div>    
                
            </div>
        </div>
    )
}

export default ItemCounter