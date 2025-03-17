// write the component code here
// write the component code here
import React from "react";
import "./usercard.css"; // Optional: You can create this file for custom styling

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://www.shutterstock.com/image-illustration/grey-new-generic-stylish-sport-600nw-1313132003.jpg"; 
  const name = "yashmieen";
  const email = "yashmieen1@gmail.com";
  const phoneNumber = "9441413672";
  const address = "chittor,ap";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">Email: {email}</p>
      <p className="usercard-phone">Phone: {phoneNumber}</p>
      <p className="usercard-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;