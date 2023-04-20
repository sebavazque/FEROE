import React from 'react'
import "./CSS/Acordeon.css"
import {Link} from 'react-router-dom'
import { FiArrowDown,FiArrowUp } from "react-icons/fi";

function Acordeon () {

    return(
        <section className='Acontain'>
            <div className='Acotain-content'>
                <div className="AcordeonContainer">
            <div className="acordeon">
                <h2 className='title'>Pregunta frecuentes</h2>


                <article className='acordeon-panel'>
                    <input id='acordeon-question' name='acordeon'/>
                    <label className='acordeon-question'>
                        Como lavar
                        <FiArrowDown class="open"/>
                    </label>
                    <div className='acordeon-bo'>    
                        <p className='acordeon-answer'>Para los lavados recomendamos que las remeras sean lavadas a mano, con agua fría o tibia.</p>
                        <p className='acordeon-answer'> NO planchar sobre la estampa.</p>
                    
                    </div>
                </article>

                <article className='acordeon-panel'>
                    <input id='acordeon-question-1' name='acordeon'/>
                    <label className='acordeon-question-1'>
                        Envios
                        <FiArrowDown class="open"/>
                        <FiArrowUp class="close"/>
                    </label>
                    <div className='acordeon-bo'>
                        <p className='acordeon-answer'>Los pedidos se retiran por Barrio Martin (Rosario) o se pueden coordinar envios por cadeteria a cargo del cliente</p>
                    </div>
                </article>

                <article className='acordeon-panel'>
                    <input id='acordeon-question-2' name='acordeon'/>
                    <label className='acordeon-question-2'>
                        Metodos de pago
                        <FiArrowDown class="open"/>
                        <FiArrowUp class="close"/>
                    </label>
                    <div className='acordeon-bo'>
                        <p className='acordeon-answer'>Los metodos de pago son en efectivo, transferencia bancaria o a través de Mercado Pago</p>
                    </div>
                </article>
            </div>
                </div>
            </div>
        </section>

    )
}

export default Acordeon