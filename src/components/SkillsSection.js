import React from "react";
import JAVA from "assets/img/java-logo.png";
import JAVASCRIPT from "assets/img/javascript-logo.png";
import REACT from "assets/img/logo.svg";
import SQL from "assets/img/pngwave.png";

export default function SkillsSection() {
  return (
    <section className="page-section" id="skills">
      <div className="container">
        {/* <!-- Contact Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Skills
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-database mr-2"></i>
            <i className="fas fa-laptop-code"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Contact Section Form--> */}
        <div className="row mt-5 d-flex align-items-center">
          <div className="col-md-3">
            <img className="img-fluid" src={JAVA} alt="java logo" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid" src={JAVASCRIPT} alt="javascript logo" />
          </div>
          <div className="col-md-3">
            <img className="img-fluid" src={REACT} alt="react logo" />
          </div>
          <div className="col-md-3">
            <img
              className="img-fluid"
              src={SQL}
              alt="sql logo"
              style={{ width: "170px", margin: "auto" }}
            />
          </div>
        </div>
        <div className="row text-secondary mt-5">
          <h4 className="text-center w-100 text-center">
            Java, Spring, Javascript, React, ORACLE SQL, Unix, Git, HTML/CSS,
            Bootstrap{" "}
          </h4>
        </div>
      </div>
    </section>
  );
}
