import './CSS/BannerFrom.css'
import {Link} from 'react-router-dom'
import LOGO from './CSS/FOTOS/LOGO.png'
import React from 'react'

const BannerFrom = () => {
  return (
    <section className="bannerFrom-container">
        <div className="bannerFrom">
        <Link to='/productos'>

          <div className='banner-contentFrom'>
          <h3>FROM US </h3>

            </div>
          </Link>

        </div>  

        <div className="bannerFrom2">
        <Link to='/productos'>
        <div className='banner-contentFrom'>
        <h3>TO YOU</h3>
          {/* <img src={LOGO} className="logoFrom" /> */}
          </div>
          </Link>
        </div>
    </section>
  )
}

export default BannerFrom