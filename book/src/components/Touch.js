import React from "react";

const Touch = () => {
    return (
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

                </form>

            </div>

        </div>
    )
}

export default Touch;