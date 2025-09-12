import React from "react";
import { useAudio } from "./AudioProvider";
import { GiSpeaker } from "react-icons/gi";
import "./listennow.css";

function ListenNow() {
 const trackList = [
   { number: 1, title: "Welcome To The Family", src: "https://deathie-songs.storage.googleapis.com/default-landing.wav" },
  { number: 2, title: "Wave Hello", src: "https://deathie-songs.storage.googleapis.com/Deathie_02v1_WaveHello_2444.wav" },
  { number: 3, title: "Lies", src: "https://deathie-songs.storage.googleapis.com/Deathie_03v1_Lies_2444.wav" },
  { number: 4, title: "The Middle", src: "https://deathie-songs.storage.googleapis.com/Deathie_04v1_TheMiddle_2444.wav" },
  { number: 5, title: "21st Century Man", src: "https://deathie-songs.storage.googleapis.com/Deathie_05v1_21stCenturyMan_2444.wav" },
  { number: 6, title: "Wired Ass Backwards", src: "https://deathie-songs.storage.googleapis.com/Deathie_06v1_WiredAssBackwards_2444.wav" },
  { number: 7, title: "Hog On A Spit", src: "https://deathie-songs.storage.googleapis.com/Deathie_07v1_HogOnASpit_2444.wav" },
  { number: 8, title: "Angry Turnips", src: "https://deathie-songs.storage.googleapis.com/Deathie_08v1_AngryTurnips_2444.wav" },
  { number: 9, title: "Soul Death", src: "https://deathie-songs.storage.googleapis.com/Deathie_09v1_SoulDeath_2444.wav" },
  { number: 10, title: "Hole In The Floor", src: "https://deathie-songs.storage.googleapis.com/Deathie_10v1_HoleInTheFloor_2444.wav" },
  { number: 11, title: "Heaven Help Us", src: "https://deathie-songs.storage.googleapis.com/Deathie_11v1_HeavenHelpUs_2444.wav" },
  { number: 12, title: "Broken Parts", src: "https://deathie-songs.storage.googleapis.com/Deathie_12v1_BrokenParts_2444.wav" },
];

const half = Math.ceil(trackList.length / 2);
const firstHalf = trackList.slice(0, half);
const secondHalf = trackList.slice(half);


    const { changeTrack } = useAudio();

  const handlePlayLandingAudio = () => {
    changeTrack("/DeathMusicFolder/default-landing.wav");
  };

  return (
    <div className="container__listen">
      <div className="row__listen">
        <h1 className="listen__title">Feel Free To Give A Listen!!</h1>

        <div className="album__wrapper">
          <h2 className="album__name">Big Fat Slob</h2>
         <div className="list__over">
  {[firstHalf, secondHalf].map((chunk, i) => (
    <ul className="list" key={i}>
      {chunk.map((track) => (
        <li key={track.number}>
          <button
            className="speaker__button"
            onClick={() => changeTrack(track.src)}
          >
            <span className="speaker__para">
              {track.number}. {track.title}
            </span>
            <GiSpeaker />
          </button>
        </li>
      ))}
    </ul>
  ))}
</div>
        </div>
      </div>
    </div>
  );
}

export default ListenNow;
