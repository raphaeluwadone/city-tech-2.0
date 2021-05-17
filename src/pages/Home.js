import React from "react";
import Cushion from "../assets/cushion.png";
import Door from "../assets/Vector-1.png";
import Phone from "../assets/XMLID 334.png";
import CardOne from "../assets/Rectangle 261.png";
import CardTwo from "../assets/Rectangle 261-1.png";
import CardThree from "../assets/Rectangle 261-2.png";
import Strike from "../assets/orange-strike.png";
import "../App.css";
import Carousel from  '../components/carousel/Carousel' 

function Home() {
  return (
    <>
      <main className="home__main">
        <div className="home__main__title">
          <h1>Security and comfort, with the push of a button</h1>
          <p>
            Monitor and control your home, wherever, whenever with cutting-edge
            home automation system
          </p>
        </div>
      </main>
      <section className="home__info">
        <div className="container-fluid">
          <div className="container">
            <h2 className="text-center">
              A smart home can
              <span className="never">
                never
                <img
                  src={Strike}
                  alt=""
                />
              </span>
              go wrong
            </h2>
            <p className="main-text">
              Choose CityTech, a team of industry experts and the leading
              provider of home automation systems for homes and businesses,
              integrating a user-friendly interface with efficient home systems
              which automate and control connected smart devices, including
              lighting, audio, video, indoor cinemas, climate, control, intercom
              and security. At CityTech, we aim to help you find the balance
              between iron-clad security and luxurious convenience in your home
            </p>
          </div>
          <div className="home__info__cards">
            <div className="card-deck">
              <div className="card">
                <img src={Cushion} className="" alt="" width="" />
                <div className="">
                  <p className="">
                    Live your best life in comfort and with the best audio
                    systems
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src={Phone}
                  className=""
                  alt="..."
                  width=""
                />
                <div className="">
                  <p className="">
                    Get access to control everything via an app
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={Door} className="" alt="..." />
                <div className="">
                  <p className="">
                    Open the doors to an amazing home experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home__slider">
        <Carousel />
      </div>
      <div className="home__products">
        <div className="">
          <h2 className="">
            Get the
            <span className="best">
              best
              <img src={Strike} alt="" className="" />
            </span>
            for your home
          </h2>
          <div className="card-deck">
            <div className="card">
              <img
                src={CardOne}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Take control of your home in the palm of your hands
                </h5>
                <p className="card-text">
                  Whether it’s access control, light regulation, energy control
                  or cutting-edge entertainment systems, City Tech is ready to
                  puts the power and control over your home in your hands.
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src={CardTwo}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  It’s your home. Get a feel of it.
                </h5>
                <p className="card-text">
                  Your sanctum should feel like yours, no one else’s. With our
                  state-of-the-art solutions, you’ll never have to doubt who’s
                  in control
                </p>
              </div>
            </div>

            <div className="card">
              <img
                src={CardThree}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Protect what’s dear to you</h5>
                <p className="card-text">
                  With our CCTV and security solutions, you can watch what’s
                  going on in your home, even when you’re a thousand miles away.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
