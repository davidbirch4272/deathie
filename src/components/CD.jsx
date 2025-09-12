import React from "react";
import { Link } from "react-router-dom";
import "./cd.css";

function CD({ cd, addToCart, cart }) {
  function cdExistsOnCart() {
    return cart && cart.id === cd.id;
  }

  function addCdToCart() {
    addToCart(cd);
    console.log("CD loaded", cd);
  }

  return (
    <div className="container__cd">
      <div className="row__cd">
        <div className="cd__selected">
          <div className="cd__selected--img">
            <img src="https://storage.googleapis.com/deathie-pictures/DeathieCD.svg" alt={cd.title} className="cd__image" />
          </div>
          <div className="cd__selected--description">
            <h2 className="cd__selected--title">{cd.title}</h2>
            <div className="cd__selected--price">
              <div className="cd__price">${cd.price}</div>
              <div className="cd__summary">
                <h3 className="cd__summary--title">About</h3>
                <p className="cd__summary--para">{cd.description}</p>

                {cdExistsOnCart() ? (
                  <Link to="/cart" className="cd__link">
                    <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={addCdToCart}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CD;
