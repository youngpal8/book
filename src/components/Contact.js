import React from "react";
import MapComponent from '../components/MapComponent';

const Contact = () => {
  return (
    <div>
    <div className="hero">
    <div className="overlay">
      </div>
      <div className="content4">
          <p className="new">Contact Us.</p>
      </div>


    </div>

    <div className="touch-section">
            <div className="touch-container">
                <p className="touch-text">Get In Touch </p>
                <p className="touch-text1">Contact US</p>
                <form className="touch-form">
                <p><label for="name">Name</label></p> 
                <p><input type="text" placeholder="Your name"></input></p>
                <p><label for="email">Email</label></p>
                <p><input type="text" placeholder="Your Email"></input></p>
                <p><label for="Pnumber">Phone Number</label></p>
                <p><input type="text" placeholder="Your Phone Number"></input></p>
                <p><label for="message">Message</label></p>
                <p><textarea name="Your message" id="message">Your message</textarea></p>
                <p><input type="Submit" value="Submit" className="form-submit"></input></p>
                </form>
                <p className="guest">Guest Complaint:</p> 
                <p className="mdgreen"> md@greenbeltsuites.com</p>
              
            </div>
            <div className="map-container">
            <MapComponent />
        </div>


        </div>

        <div className="newsletter-section">
        <p className="newsletter">Join Our Newsletter</p>
        <p className="promotion">Sign up to our newsletter to receive our latest news about offers & promotions.</p>
        <div className="news">
            <p className="E-mail">Email address</p>
            <input className="input-mail" type="text" name="email adress" id="" placeholder="Enter Your Email"></input>
            <input className="submit" type="submit" value="Subscribe"></input>
        </div>

        </div>
    </div>

  )
};

export default Contact;