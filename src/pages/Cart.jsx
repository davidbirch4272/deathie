import React from "react"
import CheckOut from "../components/CheckOut";
  
function Cart({ cart, removeItem, changeQuantity }) {
  console.log("Cart recieved", cart)
    const total = () => {
    if (!cart) return 0;
    return cart.price * cart.quantity;
  };

  return (
    <div>

    <CheckOut cart={cart} removeItem={removeItem} changeQuantity={changeQuantity} total={total}/>

      
    </div>
  )
};

export default Cart;