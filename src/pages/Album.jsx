import React from "react"
import CD from "../components/CD";

function Album({ cd, addToCart, cart }) {
  return (
    <div>

    <CD cd ={cd} addToCart={addToCart} cart={cart} />
      
    </div>
  )
};

export default Album;

