import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { FaRegWindowClose } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = (numberOfItems) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <>
      <nav>
        <div className="nav__container">
          <div className="title__wrapper">
            <img src="./DeathieTheLogo.svg" alt="" className="logo" />
            <Link to="/">
              <h1 className="band__name">Deathie</h1>
            </Link>
          </div>
          <ul className="nav__links">
            <li className="nav__list">
              <Link
                to="/Listen"
                className="
              nav__links
              link__hover-effect
              link__hover-effect--blue"
              >
                Listen
              </Link>
            </li>
            <li className="nav__list">
              <Link
                to="/About"
                className="
              nav__links
              link__hover-effect
              link__hover-effect--blue"
              >
                About
              </Link>
            </li>
            <li className="nav__list">
              <Link
                to="/Album"
                className="
              nav__links
              link__hover-effect
              link__hover-effect--blue"
              >
                Album
              </Link>
            </li>
            <li className="nav__list">
              <Link
                to="/TShirt"
                className="
              nav__links
              link__hover-effect
              link__hover-effect--blue"
              >
                T-Shirt Store
              </Link>
            </li>
            <li className="nav__list">
              <Link
                to="/Gigs"
                className="
              nav__links
              link__hover-effect
              link__hover-effect--blue"
              >
                Gigs
              </Link>
            </li>
            <li className="nav__list">
              <Link
                to="/Contact"
                className="
              nav__links
              link__hover-effect
              link__hover-effect--blue"
              >
                Contact
              </Link>
            </li>
            <li className="nav__list">
              <Link
                to="/cart"
                className="
              nav__links
              link__hover-effect
              link__hover-effect--blue"
              >
                Cart
                {numberOfItems > 0 && (
                  <span className="cart__length">{numberOfItems}</span>
                )}
              </Link>
            </li>
          </ul>
         <button className="btn__menu" onClick={openMenu}>
            <GiHamburgerMenu />
          </button>
          <div className="menu__backdrop">
            <button className="btn__menu btn__menu--close" onClick={closeMenu}>
              <FaRegWindowClose />
            </button>
            <ul className="menu__links">
              <li className="menu__list">
                <Link to="/" className=
                "menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  Home
                </Link>
              </li>

              <li className="menu__list">
                <Link to="/Listen" className="menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  Listen
                </Link>
              </li>

              <li className="menu__list">
                <Link to="/About" className="menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  About
                </Link>
              </li>

              <li className="menu__list">
                <Link to="/Album" className="menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  Album
                </Link>
              </li>

              <li className="menu__list">
                <Link to="/TShirt" className="menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  T-Shirt Store
                </Link>
              </li>

              <li className="menu__list">
                <Link to="/Gigs" className="menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  Gigs
                </Link>
              </li>

              <li className="menu__list">
                <Link to="/Contact" className="menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  Contact
                </Link>
              </li>

              <li className="menu__list">
                <Link to="/Cart" className="menu__link link__hover-effect link__hover-effect--white" onClick={closeMenu}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
