import React from 'react'
import './CSS/Shop.css'
import {Link} from 'react-router-dom'

function Shop () {
    return(
        <section className="shop">
        <Link to='/productos'>
            <div className="shop-content">
                <h2 className='h2-shop'>SHOP</h2>
            </div>
        </Link>
        </section>

    )
}

export default Shop