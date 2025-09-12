import React, { useEffect, useState } from "react";
import "./autoscrollslideshow.css";

const images = [
  "https://storage.googleapis.com/deathie-pictures/DeathieTheLogo.svg",
  "https://storage.googleapis.com/deathie-pictures/DeathieBandPhoto.svg",
  "https://storage.googleapis.com/deathie-pictures/DavidDrumming.svg",
  "https://storage.googleapis.com/deathie-pictures/DeathieCD.svg",
  "https://storage.googleapis.com/deathie-pictures/DeathieTShirt1.svg",
];

function AutoScrollSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="test-wrapper">
      <div className="slideshow__container">
        <img
          src={images[currentIndex]}
          alt={`Deathie ${currentIndex}`}
          className="slideshow__image"
        />
      </div>
    </div>
  );
}

export default AutoScrollSlideshow;
