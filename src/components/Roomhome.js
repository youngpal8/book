import React from "react";
import space1 from "./Images/Untitled.jpg";
import { Link } from "react-router-dom";

const Roomhome = () => {
  return <div>
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
  </div>;
};

export default Roomhome;