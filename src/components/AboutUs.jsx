import React from "react";
import "./aboutus.css";


function AboutUs() {
  return (
    <div className="container__about">
      <div className="row__about">
        <h1 className="about__title">About Us</h1>
        <div className="band__wrapper">
          <figure className="picture">
            <img
              src="https://storage.googleapis.com/deathie-pictures/DeathieBandPhoto.svg"
              alt=""
              className="Rockers"
              />
          </figure>   
          <div className="band__text">
        <p className="about__para">Deathie was formed in 2019 by James Williams and David Birch. We are a post-punk rock band with a Christian-leaning bend.
          </p>
        <p className="about__para">            
          Jim is a naturally gifted self-taught guitarist and song-writer who
          started playing music from the early age of 14. Many of his inspirations are
          from British rock bands and hard rock bands like Thin Lizzy, MotorHead and Black Sabbath. 
          He found his way into the rock clubs of New York and Providence as the lead guitarist for the band
          Gothic Snow Tire.
        </p>
        <p className="about__para">
          David is a self-taught drummer who started playing at the
          age of 13. He was inspired by the bands famous in his youth, Gun's and
          Roses, Aerosmith and alike, and later discovered Led Zeppelin. Deathie
          is David's first official band involvement.
        </p>
        <p className="about__para">
          We are looking forward to playing at clubs in the Boston area.
        </p>
            </div>     
         </div>
      </div>
    </div>
  );
}

export default AboutUs;
