// src/components/Service.js
import React from 'react';
import './Service.css';
import icon1Image from '../assets/icon1.png'
import icon2Image from '../assets/icon2.png'
import icon3Image from '../assets/icon3.jpg'

const Service = () => {
  return (
    <div>
    <section className="service">
       <h3> Services</h3> 
       <p>
        Here are kind of services I can offer you!!
       </p>
    </section>
    <section className="images">
    <div class="card">
  <div class="icon">
    <img src={ icon1Image } alt="Icon" />
  </div>
  <h3>Mobile App</h3>
  <p>Web development is the process of building, programming...</p>
</div>
<div class="card">
  <div class="icon">
    <img src={ icon2Image } alt="Icon" />
  </div>
  <h3>Graphic Design</h3>
  <p>Web development is the process of building, programming...</p>
</div>
<div class="card">
  <div class="icon">
    <img src={ icon3Image } alt="Icon" />
  </div>
  <h3>Web Design</h3>
  <p>Web development is the process of building, programming...</p>
</div>
</section>
    </div>
    
  );
};

export default Service;
