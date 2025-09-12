import React, { useRef} from "react"
import emailjs from "emailjs-com"; 
import "./contactus.css";

function ContactUs() {
const form = useRef();

const contact = (event) => {
 event.preventDefault();

 emailjs
   .sendForm(
       'service_tx0lm56',
       'template_oh052i8',
       form.current,
       'RFX9PVJtrLuEWM9lW'
  )
  .then(() => {
    alert("Message sent successfully!");
    form.current.reset();
  })  
  .catch (() => {
        alert(
     "The email service is temporarily unavailable.  Please contact me directly on davidbirch4272@gmail.com"   
    );
    });
   };

  return (
    <div className="container">
        <div className="row">
        <h1 className="contact__us">Feel Free To Drop Us a Note!</h1>
        <div className="contact__wrapper">
        <div className="form__shell">
        <form ref={form} onSubmit={contact} className="contact__form">
        <div className="form__item">
          <label className="form__item--label">Name</label>
          <input className="input" name="user_name" type="text" required></input>
        </div>


        <div className="form__item">
          <label className="form__item--label">E-Mail</label>
          <input className="input" name="user_email" type="email" required></input>
        </div>

        <div className="form__item">
          <label className="form__item--label">Message</label>
          <textarea className="input" name="message" type="text" required></textarea>
        </div>  
        
        <button type="submit" id="contact__submit" className="form__submit">
        Send!
        </button>
          </form>
        </div>
       
        <figure className="picture">
          <img src="/mailbox.svg  " alt="" className="mailbox" />
        </figure>
        </div>
        </div>
    </div>

  )
};

export default ContactUs;
