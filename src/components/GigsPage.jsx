import React from "react";
import "./gigspage.css"; // Optional: for styling

function GigsPage() {
  return (
    <div className="gigs-page">
      <h1 className="gigs-title">Gigs</h1>

      <section className="upcoming-gigs">
        <h2>Up And Coming Gigs</h2>
        <p>No upcoming gigs at the moment, but check back soon!</p>
      </section>

      <section className="previous-gigs">
        <h2>Previous Gigs</h2>

        {/* 2025 Porchfest */}
        <div className="gig-block">
          <h3 className="event__title">2025 Porchfest</h3>
          <div className="gig-row">
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Welcome To The Family.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Welcome To The Family</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Haven For Criminals.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Haven For Criminals</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Hole In The Floor.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Hole In The Floor</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Moving Along.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Moving Along</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/The Middle.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>The Middle</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/I Wanna Warn You.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>I Wannna Warn You!</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Falling Apart At The Seams.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>
                Falling Apart At The Seams Featuring Michael Domenici on
                Harmonica
              </p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Fortress.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Fortress Featuring Michael Domenici on Harmonica</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/She.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>She Featuring Michael Domenici on Harmonica</p>
            </div>
          </div>
        </div>

        {/* 2024 Porchfest */}
        <div className="gig-block">
          <h3 className="event__title">2024 Porchfest</h3>
          <div className="gig-row">
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Haven For Criminals.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Haven For Criminals</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Heaven Help Us.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Heaven Help Us</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Low.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Low</p>
            </div>
            <div className="gig-video">
              <div className="video-wrapper">
                <video
                  className="gig-video-player"
                  src="https://deathie-videos.storage.googleapis.com/Wave Hello.MOV"
                  controls
                  width="100%"
                />
              </div>
              <p>Wave Hello</p>
            </div>
          </div>
        </div>
      </section>
    </div>  
  );
}

export default GigsPage;
