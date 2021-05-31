import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../../assets/carousel-1.png";
import Carousel2 from "../../assets/carousel-2.png";
import Carousel3 from "../../assets/carousel-3.png";
import carouselIcon1 from "../../assets/cctv 1 (1).png"
import carouselIcon2 from "../../assets/curtain 1.png"
import carouselIcon3 from '../../assets/stereo-camera 1.png'
import Slide from './Slide'

import Slider from "react-slick";

const settingsModules = {
    dots: true,
    infinite: true,
    speed: 1000,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    dotsClass: "button__bar",
    arrows: false
  };
function CarouselComponent() {

    return (
        <>
            <Slider
                {...settingsModules}
            >
                <div>
                    <Slide icon={carouselIcon1} lead={Carousel1} heading={'SECURITY AND ACCESS CONTROL SYSTEMS'} desc={"Take control of your home. Decide who goes where, and when. Secure your home and ensure your peace of mind, even when you’re not in it with our RFID Access Control Systems, Smart Doorbells, CCTV system and smart cameras. Communicate with your entire home with audio and video intercoms and top-of-the-line telephony system."}/>
                </div>
                <div>
                    <Slide icon={carouselIcon2} lead={Carousel2} heading={'LIGHTNING AND WINDOW CONTROL SYSTEMS'} desc={"Your home, your rules. Choose an ambience that suits your mood with our Smart Lights and Curtain Sliders. Schedule, customise and control the lighting with the Smart Switches and Smart Blind system."}/>
                </div>
                <div>
                    <Slide icon={carouselIcon3} lead={Carousel3} heading={'AUDIO-VISUAL AND ENTERTAINMENT SYSTEMS'} desc={"Whether you enjoy ambient classical music or prefer grooving to upbeat Afropop, our aesthetically-sounding wall and ceiling speakers are sure to set the right mood for you. Make your house intelligent with our intuitive Home Assistant and stay connected with a house-wide PA system, indoor cinema and audio and video multicasting system."}/>
                </div>
            </Slider>
        </>
    )
}

export default CarouselComponent
