import React, { useEffect, useState } from "react";
import PROFILE from "assets/img/profile-pic.jpg";
import RESUME from "assets/img/Resume-v1.9.pdf";

export default function AboutSection() {
  return (
    <section className="page-section text-primary mb-0" id="about">
      <div className="container">
        {/* <!-- About Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-primary">
          About
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom mb-5">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <br></br>
        {/* <!-- About Section Content--> */}
        <div className="row mb-3">
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <img
              className="img-fluid rounded-circle border border-secondary"
              src={PROFILE}
              alt=">Profile Picture"
              style={{ height: "400px", width: "400px" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="text-secondary">Khoi Phan</h2>
            <h4 className="text-secondary mb-3">
              <i>Full-stack Web Engineer in Vietnam</i>
            </h4>
            <p className="lead p-3">
              Experienced Web Developer with a demonstrated history of working
              in the software industry. Skilled in Web development (React &
              JQuery Frameworks) and Enterprise applications (JavaEE & Spring
              Apps). Accustomed to workflows that include: agile methodologies,
              test driven design, continuous integration, and working with Unix
              systems and SQL databases. Strong engineering professional who
              gradudated from the University of California, San Diego with a
              B.A. in International Business. My favourite stack: ReactJS,
              ReactNative, Java Spring, all with continuous integration with
              Github.
            </p>
            <div className="p-3">
              <a
                href={RESUME}
                className="btn btn-large border-secondary text-secondary"
              >
                See my Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
