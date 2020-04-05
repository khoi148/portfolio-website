import React, { useEffect, useState } from "react";
import TypeWriterComponent from "./TypeWriterComponent.js";
import avatar from "assets/img/avataaars.svg";

export default function Masthead() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <div className="container d-flex align-items-center flex-column">
        {/* <!-- Masthead Avatar Image--> */}
        <img className="masthead-avatar mb-5" src={avatar} alt="" />
        {/* <!-- Masthead Heading--> */}
        <h1 className="masthead-heading text-uppercase mb-0">KHOI PHAN</h1>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-power-off"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Masthead Subheading--> */}

        <TypeWriterComponent />
      </div>
    </header>
  );
}
