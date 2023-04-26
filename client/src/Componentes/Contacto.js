import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './CSS/Contacto.css'
import { toast } from 'react-toastify';
import BannerShop from './BannerShop';
import { FiMail } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { useEffect } from 'react'

function Contacto () {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mwnds9h', 'template_fbno42z', form.current, 'NiLxqWHT18mTyDQpG')
    .then(result => toast.success(result.message))
    .catch(err => toast.error(err.message))
    .finally(() => {
        form.current.reset();
    })
};

  return (
    <div>
  <BannerShop/> 
  <a href='https://wa.me/3413667323'><AiOutlineWhatsApp className='whapFoot'/></a>

    <div className='containerForm'>
     
      <div className='contactForm'>
        <form ref={form} onSubmit={sendEmail} >
        <h2>Contactame</h2>

        <div className='formBox'>
            
            <div className='inputBox' id='w50'>
                <input type="text" name='userName' required />
                <span>Nombre y apellido </span>
            </div>

            <div className='inputBox' id='w50'>
                <input type="email" name='userEmail' required />
                <span>Correo</span>
            </div>
            <div className='inputBox' id='w50'>
                <input type="text" name='userCel' required />
                <span>Celular</span>
            </div>
            <div className='inputBox' id='w100'>
                <textarea name='userMensaje' required></textarea>
                <span>Escriba su mensaje</span>
            </div>
            <div className='inputBox' id='w100'>
            <input type="submit" value="Enviar" />
            </div>
            
        </div> <FiMail className='gmail'/> <p className='mail'>weareferoe@gmail.com</p>
            
        </form>
      </div>  
    </div></div>
  );
};

export default Contacto