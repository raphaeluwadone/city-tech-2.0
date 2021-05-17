import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel1 from "../../assets/carousel-1.png";
import Carousel2 from "../../assets/carousel-2.png";
import Carousel3 from "../../assets/carousel-3.png";
import carouselIcon1 from "../../assets/cctv 1 (1).png"
import carouselIcon2 from "../../assets/curtain 1.png"
import Slide from './Slide'

import Slider from "react-slick";

const settingsModules = {
    dots: true,
    infinite: true,
    speed: 500,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    arrows: false
  };
function CarouselComponent() {

    const renderSlides = () =>
    [1, 2, 3, 4, 5, 8].map(num => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

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
                    <Slide icon={carouselIcon2} lead={Carousel3} heading={'LIGHTNING AND WINDOW CONTROL SYSTEMS'} desc={"Your home, your rules. Choose an ambience that suits your mood with our Smart Lights and Curtain Sliders. Schedule, customise and control the lighting with the Smart Switches and Smart Blind system."}/>
                </div>
            </Slider>
        </>
    )
}

export default CarouselComponent
