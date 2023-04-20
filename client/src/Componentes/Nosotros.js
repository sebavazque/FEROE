import React from 'react'
import './CSS/Nosotros.css'
import { useEffect } from 'react'
import LOGO from './CSS/FOTOS/LOGO.jpeg'

const Nosotros = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='containerAbout' id='nosotros'>
         
        <div className='aboutRow'>
            <p>Somos una marca de ropa nacida en Rosario durante el transcurso del 2022 </p>
            <p> Con mucho esfuerzo, logramos diseñar nosotros mismos nuestra ropa</p>
            <p> Esperamos que les gusten nuestros modelos, los disfruten y no se olviden, esto recién está empezando.</p>
            <p>@weareferoe</p>
            
        </div>
    </div>
  )
}

export default Nosotros