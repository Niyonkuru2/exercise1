// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-form"> 
    <section>
      <h2>Get in Touch</h2>
      <p>I would hear from you whether you have something to talk with me feel <br />
      free to communicate with me by filling this form! </p>
    <div className="input-group">
      <input type="text" placeholder="Enter your Name"></input>
      <input type="email" placeholder="Enter your Email"></input><br />
      <textarea placeholder="Enter your Message here...."></textarea><br />
      <button type="Submit"> SEND</button>
    </div>
    <div>
      <footer>  © 2025 Prince NUNDIMANA. All rights reserved.</footer>
    </div>
    </section>
    </div>
  );
};

export default Contact;
