import React from 'react'
import './CSS/Banner.css'
import { useEffect } from 'react'

const Banner = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    
    <section className="banner">
        <div className="banner-content">
            
            
        </div>
    </section>
  )
}

export default Banner