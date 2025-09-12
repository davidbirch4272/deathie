import React from "react";
import footer from "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer__container">
          <div className="footer__row">
            <div className="footer__logo--container">
              <figure className="footer__logo"></figure>
              <Link to="/">
                <img
                  src="./DeathieTheLogo.svg"
                  className="footer__logo--img"
                  alt=""
                ></img>
              </Link>
            </div>
            <div className="footer__links">
              <Link
                to="/"
                className="                           
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                Home
              </Link>

              <Link
                to="/Listen"
                className="
    footer__link 
    link__hover-effect
    link__hover-effect--white"
              >
                Listen
              </Link>

              <Link
                to="/About"
                className="
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                About
              </Link>

              <Link
                to="/Album"
                className="
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                Album
              </Link>

              <Link
                to="/TShirt"
                className="
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                T-Shirt Store
              </Link>

              <Link
                to="./Gigs"
                className="
    footer__link
    link__hover-effect
    link__hover-effect--white"
              >
                Gigs
              </Link>
            </div>
            <div className="footer__copyright">
              Copyright &copy; 2025 Deathie. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
