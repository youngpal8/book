import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import logo from "./Images/greenbelthotellogo.jpg";

const Header = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        navbarRef.current.classList.add('nav-active');
      } else {
        navbarRef.current.classList.remove('nav-active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={navbarRef} className="navbar">
      <li>
        <Link to="/aboutus">
          <img src={logo} alt="logo"></img>
        </Link>
      </li>
      <li>
        <Link to="/" className="hme">Home</Link>
      </li>
      <li>
        <Link to="/aboutus">About Us</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
      </li>
      <li>
        <Link to="/bookroom">Book a Room</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </header>
  );
};

export default Header;
