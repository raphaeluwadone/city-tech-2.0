import React from "react";
import { Link } from 'react-router-dom'
import Curtain from '../assets/curtain 1.png'
import Bulb from '../assets/Vector (2).png'
import Stereo from '../assets/stereo-camera 1.png'
import Cctv from '../assets/cctv 1.png'
import Tri from '../assets/Rectangle 249.png'
import Tri2 from '../assets/Rectangle 250.png'
import Cctv2 from '../assets/cctv 1 (1).png'
import Rect1 from '../assets/Rectangle 245.png'
import Rect2 from '../assets/Rectangle 246.png'
import Rect3 from '../assets/Rectangle 245 (1).png'
import Rect4 from '../assets/Rectangle 247.png'
import Stereo2 from '../assets/stereo-camera 1.png'
import TopArrow from "../components/TopArrow";


function Services() {
  return (
    <>
      <div class="services__main" id='service'>
        <TopArrow url={'service'}/>
        <div class="services__main__content">
          <div class="services__main__content__text">
            <h1 class="bg-title">
              An intelligent home. All under your control.
            </h1>
            <h1 class="sm-title">We provide the best solutions</h1>
            <p>
              Our wide range of services was specially designed to do all the
              heavy lifting, leaving you to focus on the important things.
            </p>
          </div>
          <div class="services__main__content__img">
            <div class="img__upper">
              <img src={Cctv} alt="cctv" />
              <img src={Curtain} alt="" />
            </div>
            <div class="img__lower">
              <img src={Bulb} alt="light" class="bulb" />
              <img src={Stereo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section class="services__info">
        <div class="service__container">
          <div class="service--block">
            <div class="services__info__img--left">
              <div class="info__img__icon">
                <img src={Tri} alt="" class="tri" />
                <img src={Cctv2} alt="" class="icon-left" />
              </div>
              <img
                src={Rect1}
                alt=""
                class="main__service__img"
              />
            </div>

            <div class="service__info--content">
              <h3>Security and Access Control Systems</h3>
              <p>
                Don’t worry, we’ve got your back. Our security and access
                control systems help you control who has access to what areas of
                your house and when they do. Our system is designed to provide
                you with optimum control, even in your absence. Secure your home
                and ensure your peace of mind, even when you’re not in it with
                our RFID Access Control Systems, Smart Doorbells, CCTV system
                and smart cameras. Communicate with your entire home with audio
                and video intercoms and top-of-the-line telephony system.
              </p>
              <div class="req--btn">
                <Link to='/contact'>Request Quote</Link>
              </div>
            </div>
          </div>
          <div class="service--block">
            <div class="services__info__img--right">
              <div class="info__img__icon">
                <img src={Tri2} alt="" class="tri" />
                <img src={Curtain} alt="" class="icon-right" />
              </div>
              <img
                src={Rect2}
                alt=""
                class="main__service__img"
              />
            </div>

            <div class="service__info--content">
              <h3>Lighting and Window Control Systems</h3>
              <p>
                You’ll never again have to worry if its too bright or too dim;
                our sophisticated automated control system lets you decide how
                much light to let in, and when to let it in. Choose an ambience
                that suits your mood with our Smart Lights and Curtain Sliders.
                Schedule, customise and control the lighting with the Smart
                Switches and Smart Blind system.
              </p>
              <button class="req--btn">
                <Link to='/contact'>Request Quote</Link>
              </button>
            </div>
          </div>
          <div class="service--block">
            <div class="services__info__img--left">
              <div class="info__img__icon">
                <img src={Tri} alt="" class="tri" />
                <img
                  src={Bulb}
                  alt=""
                  class="energy-bulb"
                  width="20px"
                />
              </div>
              <img
                src={Rect3}
                alt=""
                class="main__service__img"
              />
            </div>

            <div class="service__info--content">
              <h3>Energy Management and Climate Control Systems</h3>
              <p>
                Say goodbye to high energy costs when you use our energy
                management systems which regulates your home’s climatic
                condition, delicately the ideal interior climate with energy
                consumption. Our Receptacle sockets, Smart plug, HVAC (Heating,
                Ventilation and Air conditioning) and Smart Thermostat can help
                you achieve optimal energy management.
              </p>
              <div class="req--btn">
                <Link to='/contact'>Request Quote</Link>
              </div>
            </div>
          </div>
          <div class="service--block">
            <div class="services__info__img--right">
              <div class="info__img__icon">
                <img src={Tri2} alt="" class="tri" />
                <img
                  src={Stereo2}
                  alt=""
                  class="icon-right"
                />
              </div>
              <img
                src={Rect4}
                alt=""
                class="main__service__img"
              />
            </div>

            <div class="service__info--content">
              <h3>Audio-Visual Entertainment Systems</h3>
              <p>
                Doesn’t matter if you’re a gamer, movie lover or music-head, our
                top-of-the-line entertainment system is designed to help you
                enjoy the things you love the most. From Wall & Ceiling Speakers
                to Home assistants, Indoor cinemas, PA systems and Audio and
                Video multicasting systems for your household to enjoy, your
                home issue to become not just a residence but a sanctuary.
              </p>
              <div class="req--btn">
                <Link to='/contact'>Request Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="video__section">
        <div class="">
          <h2>Secure Your Peace of Mind Today - Talk to A CityTech Pro</h2>
          <div class="video__container">
            <div class="">
              <p>
                We know you want the best for your home, and so do we. CityTech
                is 100% dedicated to ensuring you have a secure, intuitive and
                smart home, giving you much-needed peace of mind and the utility
                of the Internet of Things. Get started on the journey to taking
                your home into the 21st Century
              </p>
              <div class="req--btn">
                <Link to='/contact'>Talk to a Professional</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
