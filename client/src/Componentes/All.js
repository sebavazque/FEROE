import { useEffect } from 'react'
import React from 'react'
import Acordeon from './Acordeon';
import Banner from './Banner';
import BannerComodin from './BannerComodin';
import CarruselCard from './CarruselCard';
import Footer from './Footer';
import Header from './Header';
import Nosotros from './Nosotros';
import Shop from './Shop';
import CarruselContainer from './CarruselContainer';
import BannerShop from './BannerShop';
import { AiOutlineWhatsApp} from "react-icons/ai";
import BannerFrom from './BannerFrom';

const All = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div>
            <Banner/>
            <CarruselContainer/>
            <Shop/>
<BannerFrom/>
            <Acordeon/>
            
            <a href='https://wa.me/3413667323'><AiOutlineWhatsApp className='whapFoot'/></a>
        </div>
    );
}

export default All