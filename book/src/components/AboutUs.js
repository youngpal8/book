import React from "react";
import { Link } from "react-router-dom";
import reception from "./Images/come.jpg";
import reception2 from "./Images/dinning2.jpg";


const AboutUs = () => {
    return (
        <div>
    <div className="hero">
    <div className="overlay">
      </div>
      <div className="content4">
          <p className="new">About US</p>
      </div>
      <div className="content3">
        <button className="expbtn">
        <Link to="/rooms" className="explink">Explore Rooms
        <span className="expspan">&#8594;</span>
        </Link>
        </button>
      </div>
      </div>
        
    <div className="reception">
    <div><img src={reception} alt="receiption" className="reception1"></img></div>
    <div>
    <div>
        <p className="welcome1">Welcome to Greenbelt Hotels and Suites - Your Oasis of Comfort in the Heart of Lagos!</p>
    </div>
    <div>
        <p className="introduction1">At Greenbelt Hotels and Suites, we take pride in offering you a unique blend of luxury, convenience, and relaxation. Located at 5 Mathew Street off Ogba Road, Agege, via Ikeja in Lagos, our establishment is your ideal destination for a memorable stay, delicious dining experiences, and a vibrant bar scene.</p>
    </div>
    
    </div>

    </div>

    <div className="reception2">
    <div><img src={reception2} alt="receiption" className="reception3"></img></div>
    <div>
    <div>
        <p className="welcome2">Our Restaurant</p>
    </div>
    <div>
        <p className="introduction2">Indulge in a culinary journey like no other at our restaurant. Our talented chefs are dedicated to crafting delectable dishes that satisfy every palate. From local Nigerian delicacies to international cuisine, our menu is a testament to our commitment to providing an exceptional dining experience. Whether you're enjoying a romantic dinner for two or hosting a special event, our restaurant is the perfect setting for memorable moments.</p>
    </div>
    </div>
    </div>

  
 


    </div>
            
    
            
      

    )
};
export default AboutUs;
