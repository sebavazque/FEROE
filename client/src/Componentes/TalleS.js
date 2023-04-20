import React, { useState } from 'react'
import './CSS/Styles.css'

const TalleS = ({onAdd}) => {
    const[gender, setGender] = useState();
    const addToCart = () => {
        onAdd(gender)
    }
    
  return (
    <div className='talles-container'>
      <h3>{gender}</h3>
        <select value={gender} onChange = {e=>setGender(e.target.value)}>

          <option value="S" onClick={addToCart}>S </option>

          <option value="M" onChange={addToCart}  >M</option>

          <option value="L" onClick={addToCart} >L </option>

          <option value="XL" onClick={addToCart} >XL </option>

      </select>
    </div>
  )
}

export default TalleS