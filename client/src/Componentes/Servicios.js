import React from 'react'
import './CSS/Servicios.css'

const Servicios = () => {
  return (

    <div className='s2'>
    
      <div className='cards'>
          <div className='card'>
              
              <h4>Envios a todo el pais</h4>
              <span>Los pedidos se retiran por Barrio Martin o se coordinan envios por cadeteria a cargo del cliente</span>
              
          </div>
          <div className='card'>
              
              <h4>Cambios</h4>
              <span>El cliente puede hacer el cambio hasta una semana despues de la compra</span>
          </div>
          <div className='card'>
            
              <h4>Lavados</h4>
              <span>Recomendamos que sean lavadas a mano con agua fria o tibia. NO planchar sobre la estampa</span>
          </div>
      </div>

    </div>

  )
}

export default Servicios