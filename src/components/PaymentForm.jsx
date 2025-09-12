import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./paymentform.css";
import { useLocation } from "react-router-dom";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const form = useRef();

  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const [userName, setUserName] = useState("");
  const [billingName, setBillingName] = useState("");
  const [billingStreet, setBillingStreet] = useState("");
  const [billingCity, setBillingCity] = useState("");
  const [billingState, setBillingState] = useState("");
  const [billingZip, setBillingZip] = useState("");

  const [shippingName, setShippingName] = useState("");
  const [shippingStreet, setShippingStreet] = useState("");
  const [shippingCity, setShippingCity] = useState("");
  const [shippingState, setShippingState] = useState("");
  const [shippingZip, setShippingZip] = useState("");

  const [sameAsBilling, setSameAsBilling] = useState(false);

  const location = useLocation();
  const totalAmount = location.state?.total || 0;
  const quantity = location.state?.quantity || 1;  // default 1 if not provided


  useEffect(() => {
    if (sameAsBilling) {
      setShippingName(billingName);
      setShippingStreet(billingStreet);
      setShippingCity(billingCity);
      setShippingState(billingState);
      setShippingZip(billingZip);
    }
  }, [
    sameAsBilling,
    billingName,
    billingStreet,
    billingCity,
    billingState,
    billingZip,
  ]);

  const handleCheckboxChange = () => {
    setSameAsBilling(!sameAsBilling);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) return;

    const response = await fetch(
       "https://us-central1-deathieassetsproject.cloudfunctions.net/createPaymentIntent",

        // "http://localhost:8080/",
        //"http://localhost:4242/create-payment-intent",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Math.round(totalAmount * 100) }),
      }
    );

    const { clientSecret, error: backendError } = await response.json();

    if (backendError) {
      setError(backendError);
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement },
    });

    if (paymentResult.error) {
      setError(paymentResult.error.message);
      setProcessing(false);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      console.log("Sending Email with these values:", {
        user_name: userName,
        billingStreet,
        billingCity,
        billingState,
        billingZip,
        shippingName,
        shippingStreet,
        shippingCity,
        shippingState,
        shippingZip,
        quantity, 
        totalAmount,
      });

      emailjs
        .sendForm(
          "service_tx0lm56",
          "template_oh052i8",
          form.current,
          "RFX9PVJtrLuEWM9lW"
        )
        .then(() => {
          alert("Order Successfully Placed! Thank you!");
          setSuccess(true);

          setUserName("");
          setBillingName("");
          setBillingStreet("");
          setBillingCity("");
          setBillingState("");
          setBillingZip("");
          setShippingName("");
          setShippingStreet("");
          setShippingCity("");
          setShippingState("");
          setShippingZip("");
          setSameAsBilling(false);
          form.current.reset();
        })
        .catch(() => {
          alert(
            "Sorry, the order did not go through. Please contact us at davidbirch@gmail.com."
          );
        });

      setError(null);
      setProcessing(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="contact__wrapper">
          <form ref={form} onSubmit={handleSubmit} className="payment-form">
            <h3>Contact Info</h3>
            <input
              name="user_name"
              placeholder="Full Name"
              required
              value={userName}
              onChange={(e) => {
                const name = e.target.value;
                setUserName(name);
                setBillingName(name); // Autofill billing name from contact
              }}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
            />

            {/* Wrap billing and shipping in a flex container */}
            <div className="address-section">
              {/* Billing block */}
              <div className="address-block">
                <h3>Billing Address</h3>
                <input
                  name="billingName"
                  placeholder="Full Name"
                  required
                  value={billingName}
                  onChange={(e) => setBillingName(e.target.value)}
                />
                <input
                  name="billingStreet"
                  placeholder="Street Address"
                  required
                  value={billingStreet}
                  onChange={(e) => setBillingStreet(e.target.value)}
                />
                <input
                  name="billingCity"
                  placeholder="City"
                  required
                  value={billingCity}
                  onChange={(e) => setBillingCity(e.target.value)}
                />
                <input
                  name="billingState"
                  placeholder="State"
                  required
                  value={billingState}
                  onChange={(e) => setBillingState(e.target.value)}
                />
                <input
                  name="billingZip"
                  placeholder="ZIP Code"
                  required
                  value={billingZip}
                  onChange={(e) => setBillingZip(e.target.value)}
                />
                <label>
                  <input
                    type="checkbox"
                    checked={sameAsBilling}
                    onChange={handleCheckboxChange}
                  />
                  Shipping address same as billing
                </label>
              </div>

              {/* Shipping block */}
              <div className="address-block">
                <h3>Shipping Address</h3>
                <input
                  name="shippingName"
                  placeholder="Full Name"
                  required
                  value={shippingName}
                  onChange={(e) => setShippingName(e.target.value)}
                />
                <input
                  name="shippingStreet"
                  placeholder="Street Address"
                  required
                  value={shippingStreet}
                  onChange={(e) => setShippingStreet(e.target.value)}
                />
                <input
                  name="shippingCity"
                  placeholder="City"
                  required
                  value={shippingCity}
                  onChange={(e) => setShippingCity(e.target.value)}
                />
                <input
                  name="shippingState"
                  placeholder="State"
                  required
                  value={shippingState}
                  onChange={(e) => setShippingState(e.target.value)}
                />
                <input
                  name="shippingZip"
                  placeholder="ZIP Code"
                  required
                  value={shippingZip}
                  onChange={(e) => setShippingZip(e.target.value)}
                />
                <input 
                type="hidden" 
                name="quantity" 
                value={quantity}
                 />
              <input 
              type="hidden" 
              name="totalAmount" 
              value={totalAmount.toFixed(2)}
               />
              </div>
            </div>

            {/* Payment Section */}
            <div className="payment-section">
              <h3>Payment Details</h3>
              <CardElement className="payment-input" />

              <button
                type="submit"
                disabled={!stripe || processing}
                className="submit-btn"
              >
                {processing ? "Processing..." : `Pay $${totalAmount.toFixed(2)}`}
              </button>

              {error && <div style={{ color: "red" }}>{error}</div>}
              {success && (
                <div style={{ color: "green" }}>Payment succeeded!</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;


