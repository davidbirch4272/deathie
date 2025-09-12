  import React from "react";
  import { Link } from "react-router-dom";
  import "./checkout.css";
  import { FiShoppingCart } from "react-icons/fi";

  const CheckOut = ({ cart, addToCart, changeQuantity, removeItem }) => {
    const total = () => {
      if (!cart) return 0;
      return (cart.price * cart.quantity);
    };

    const isCartEmpty = !cart || cart.quantity === 0;

    return (
      <div id="cd__body">
        <main id="cd__main">
          <div className="container__cd--checkout">
            <div className="row__cd--checkout">
              <div className="books__selected--top">
                <h2 className="cart__title">Cart</h2>
              </div>

              {cart ? (
                <>
                  <div className="cart">
                    <div className="cart__header">
                      <span className="cart__cd">CD</span>
                      <span className="cart__quantity">Quantity</span>
                      <span className="cart__total">Price</span>
                    </div>
                    <div className="cart__body">
                      <div className="cart__item">
                        <div className="cart__cd">                        
                          <img
                            src="https://storage.googleapis.com/deathie-pictures/DeathieCD.svg"
                            className="cart__cd--image-img"
                            alt=""
                            ></img>                        
                          <div className="cart__cd--info">
                            <span className="cart__cd--title">{cart.title}</span>
                            <span className="cart__cd--price">
                              ${cart.price}
                            </span>
                            <button
                              className="cart__cd--remove"
                              onClick={() => removeItem(cart)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart__quantity">
                          <input
                            type="number"
                            min={0}
                            max={99}
                            className="cart__input"
                            value={cart.quantity}
                            onChange={(event) =>
                              changeQuantity(cart, event.target.value)
                            }
                          />
                        </div>
                        <div className="cart__total">
                          $
                          {(
                            (cart.price) * cart.quantity)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="total">
                    <div className="total__item total__subtotal">
                      <span>Subtotal</span>
                      <span>${total()}</span>
                    </div>
                    <div className="total__item total__tax">
                      <span>Tax</span>
                      <span>${(total() * 0.1)}</span>
                    </div>
                    <div className="total__item total__price">
                      <span>Total</span>
                      <span>${(total() + total() * 0.1)}</span>
                    </div>
                    <Link to="/Payments" 
                    state={{ 
                    total: total() + total() * 0.1,
                    quantity: cart.quantity,  
                     }}>
                    <button
                      className="btn btn__checkout">
                      Proceed to Checkout
                    </button>
                      </Link>
                  </div>
                </>
              ) : (

            <div className="cart">  
              <div className="cart__header">
                      <span className="cart__cd">CD</span>
                      <span className="cart__quantity">Quantity</span>
                      <span className="cart__total">Price</span>
                    </div>              
              <div className="cart__empty">
                  <div className="cart__empty--image">
                    <div className="cart__empty--img">
                    <FiShoppingCart />
                    </div>
                  </div>
                  <h2>You don't have any cd's in your cart!</h2>
                  <Link to="/album">
                    <button className="btn">Browse cd's</button>
                  </Link>
                </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  };

  export default CheckOut;
