import React from "react";
import Mission from "../assets/Vector (1).png";
import Vission from "../assets/XMLID 2012.png";
import ImgMain from "../assets/Vector.png";

function About() {
  return (
    <>
      <main class="about__main">
        <div class="about__main__content">
          <div class="about__main__text">
            <h1>We Want You In Control</h1>
            <p>
              {" "}
              We care about your security. We also think your comfort is
              non-negotiable.
            </p>
          </div>
          <div class="">
            <img class="about__main__img" src={ImgMain} alt="" />
          </div>
        </div>
      </main>
      <div class="about__info">
        <h2 class="">Who we are</h2>
        <p>
          There are many things you can leave to chance and luck. Your home
          isn’t one of those things. At CityTech, we believe you should be the
          master of your own ship. Control is everything, and we want to give
          you just that in your home. The CityTech team is dedicated to
          providing you with the convenience of controlling your entire home and
          the security of knowing what’s happening, at all times.
        </p>
      </div>
      <div class="about__mission">
        <div class="mission">
          <img src={Mission} alt="" />
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide you with a seamless and secure home
            automation experience
          </p>
        </div>
        <div class="vision">
          <img src={Vission} alt="" />
          <h3>Our Vision</h3>
          <p>
            To provide homeowners with a secured, personalised automated home.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
