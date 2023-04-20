import loader from './CSS/FOTOS/loader.jpg'
import React from 'react'
import './CSS/Styles.css'

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={loader}/>
        </div>
    )
}

export default Loader
