import React from "react"
import { GiSpeaker } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import "./landing.css"
import AutoScrollSlideshow from "./AutoScrollSlideShow";
import { useAudio } from "./AudioProvider";
import { Link } from "react-router-dom";

function Landing() {
  const { changeTrack } = useAudio();

  const handlePlayLandingAudio = () => {
    changeTrack("https://storage.googleapis.com/deathie-songs/default-landing.wav");
  };

  return (
  <div className="container__landing">
    <div className="background__image"> 
    <div className="row__landing">    
      <AutoScrollSlideshow />     
      <button className="speaker__button flashing-text" onClick={() => changeTrack("https://storage.googleapis.com/deathie-songs/default-landing.wav")}>
      <GiSpeaker />
      <span className="speaker__para flashing-text">Have a Listen!</span>
      </button>
      <Link to="/Contact">
      <button className="mail__btn">
      <MdEmail />
      </button>     
      </Link>
    </div>
    </div>
  </div>
  )
};

export default Landing;
