import React, { createContext, useRef, useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(new Audio("https://storage.googleapis.com/deathie-songs/default-landing.wav")); // Set default
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(null);

  const changeTrack = (src) => {
    const audio = audioRef.current;

    if (src === currentSrc && isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    audio.pause();
    audio.src = src;
    audio.loop = true;
    audio.load();
    audio.play()
      .then(() => {
        setCurrentSrc(src);
        setIsPlaying(true);
      })
      .catch((err) => console.warn("Play failed:", err));
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const resume = () => {
    audioRef.current.play().catch((err) => console.warn("Resume failed:", err));
    setIsPlaying(true);
  };

  const location = useLocation();

  useEffect(() => {
    const stopAudio = () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false)
    }

    return () => {
      stopAudio();
        }
  }, [location]);

  return (
    <AudioContext.Provider value={{ changeTrack, pause, resume, isPlaying, currentSrc }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
