import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Listen from './pages/Listen.jsx';
import About from './pages/About.jsx';
import Album from './pages/Album.jsx';
import TShirt from './pages/TShirt.jsx';
import Gigs from './pages/Gigs.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AudioProvider } from './components/AudioProvider.jsx';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Payments from './pages/Payments.jsx'; 

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
 
  const [cart, setCart] = useState(null);

  const cd = {
   id: 1, title: "Big Fat Slob", 
    description: "The first album for the band featuring Jimmy Williams on Guitar and David Birch on drums. It is a hardhitting rock album about life and all its many trials and tribulations....", 
    image: "/DeathiePictureFolder/DeathieCD.svg", 
    price: 20 
  }


 function addToCart(cd) {
      setCart({ ...cd, quantity: 1 });    
};

function changeQuantity(cd, quantity) {
  const updatedQuantity = +quantity;
  if (updatedQuantity <= 0) {
    setCart(null); 
  } else {
    setCart({ ...cd, quantity: updatedQuantity });
  }
}

function removeItem(cd) {
  setCart(null);
}

function numberOfItems() {
return cart?.quantity || 0;
 
  }

useEffect(() => {
console.log(cart);
}, [cart])


  return (
    <Router>
       <AudioProvider>
    <div className="App">
    <Nav />  
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Listen" element={<Listen />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Album"  element={<Album cd={cd} cart={cart} addToCart={addToCart} />} />    
      <Route path="/TShirt" element={<TShirt />}></Route>
      <Route path="/Gigs" element={<Gigs />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>      
      <Route path="/Cart" element={<Cart cart={cart} addToCart={addToCart} removeItem={removeItem} changeQuantity={changeQuantity} />}></Route>      
      <Route path="/Payments" element={<Elements stripe={stripePromise}><Payments /></Elements>} />
      </Routes>
    <Footer />
    </div>
    </AudioProvider>
    </Router>
);
} 

export default App;
