import React from "react";
import { Link } from "react-router-dom";
import dine from "./Images/dinning2.jpg";
import space1 from "./Images/Untitled.jpg";
import MapComponent from '../components/MapComponent';


const Home = () => {
  return <div>
    <div className="hero">
    <div className="overlay">
        <div className="content1">
        <p className="cozy">Best Hotel With Cozy Rooms</p>
        </div>
      </div>
      <div className="content2">
          <p className="new">Just Experience A New Level Of Luxury.</p>
      </div>
      <div className="content3">
        <button className="expbtn">
        <Link to="/rooms" className="explink">Explore Rooms
        <span className="expspan">&#8594;</span>
        </Link>
        </button>
      </div>

    </div>

    <div>
        <p className="welcome">Welcome to Greenbelt Hotels and Suites - Your Oasis of Comfort in the Heart of Lagos!</p>
    </div>
    <div>
        <p className="introduction">At Greenbelt Hotels and Suites, we take pride in offering you a unique blend of luxury, convenience, and relaxation. Located at 5 Mathew Street off Ogba Road, Agege, via Ikeja in Lagos, our establishment is your ideal destination for a memorable stay, delicious dining experiences, and a vibrant bar scene.</p>
    </div>
    <div>
    <Link to="/aboutus" className="readlink">
        <button className="readbtn"><p className="read">Read More <span className="readspan">&#8594;</span></p></button>
        </Link>
    </div>

    <div className="dinninghome">
    <div><img src={dine} alt="dine" className="dine"></img></div>
    <div className="dine-epistle-container">
        <p className="dine-heading">Dinning</p>
        <p className="dine-epistle">The dining facility at Greenbelt Hotel offers a delightful culinary experience that caters to every palate. With a diverse menu featuring both local and international cuisine, guests can savor exquisite dishes prepared by skilled chefs. The elegant ambiance and attentive service create the perfect atmosphere for a memorable dining experience. Whether you're enjoying a leisurely breakfast, a business lunch, or a romantic dinner, Greenbelt Hotel's dining facility ensures a taste of culinary excellence in every bite.</p>
        <Link to="./contactus" className="dinelink">
        <button className="dinebtn">
          <p className="dine-contact">Contact Us <span className="dinspan">&#8594;</span></p>
        </button>
        </Link>
    </div>

  </div>;

  <div className="home-container">
    <div className="first-home">
        <p className="achievement">Our Achievements</p>
        <p className="leading">We are the top leading hotel with 12 years of experiences.</p>
    </div>
    <div className="figure-container">
        <div>
            <p className="figure">25k</p>
            <p className="remark">Happy clients</p>
        </div>
        <div>
            <p className="figure">17</p>
            <p className="remark">Total Rooms</p>
        </div>
        <div>
            <p className="figure">6</p>
            <p className="remark">Awards Won</p>
        </div>
        <div>
            <p className="figure">15</p>
            <p className="remark">Team Members</p>
        </div>
    </div>
   </div>

   <div className="explore-container">
        <p className="explore">Explore Our Rooms</p>
    </div>

    <div className="roomhome-container">
      <div className="deluxe-container">
      <img src={space1} alt="space1" className="deluxe-pic"></img>
      <p className="deluxe">Deluxe Room</p>
      <div className="pro-deluxe">
                <table>
                    <tr>
                        <td className="de-td1">Size:</td>
                        <td className="de-td2">10ft</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Capacity:</td>
                        <td className="de-td2">Max person 2</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Bed:</td>
                        <td className="de-td2">Normal bed</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Service:</td>
                        <td className="de-td2">Wifi, Television, Bathroom...</td>
                    </tr>
                   </table>
                   <Link to="./rooms" className="deluxe-link">
                    <button className="deluxebtn">Book</button>
                    </Link>
            </div>
      </div>

      <div className="deluxe-container">
      <img src={space1} alt="space1" className="deluxe-pic"></img>
      <p className="deluxe">Deluxe Room</p>
      <div className="pro-deluxe">
                <table>
                    <tr>
                        <td className="de-td1">Size:</td>
                        <td className="de-td2">10ft</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Capacity:</td>
                        <td className="de-td2">Max person 2</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Bed:</td>
                        <td className="de-td2">Normal bed</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Service:</td>
                        <td className="de-td2">Wifi, Television, Bathroom...</td>
                    </tr>
                   </table>
                   <Link to="./rooms" className="deluxe-link">
                    <button className="deluxebtn">Book</button>
                    </Link>
            </div>
      </div>

      <div className="deluxe-container">
      <img src={space1} alt="space1" className="deluxe-pic"></img>
      <p className="deluxe">Deluxe Room</p>
      <div className="pro-deluxe">
                <table>
                    <tr>
                        <td className="de-td1">Size:</td>
                        <td className="de-td2">10ft</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Capacity:</td>
                        <td className="de-td2">Max person 2</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Bed:</td>
                        <td className="de-td2">Normal bed</td>
                    </tr>
                   </table>
                   <table>
                    <tr>
                        <td className="de-td1">Service:</td>
                        <td className="de-td2">Wifi, Television, Bathroom...</td>
                    </tr>
                   </table>
                   <Link to="./rooms" className="deluxe-link">
                    <button className="deluxebtn">Book</button>
                    </Link>
            </div>
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
    

  
        
  </div>;
};

export default Home;