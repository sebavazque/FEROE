import React from 'react'


const OrdenDetail = ({order}) => {


  return (
    <div> 
        <h1>Detalle de la orden</h1>
        <h2>{order.totalpedido}</h2>
        <h2>{order.titulo}</h2>
      
    </div>
  )
}

export default OrdenDetail