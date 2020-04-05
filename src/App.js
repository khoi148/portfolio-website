import React from "react";
import "./App.css";
import Navbar from "components/Navbar.js";
import Masthead from "components/Masthead.js";
import PortfolioSection from "components/PortfolioSection.js";
import AboutSection from "components/AboutSection.js";
import FooterSection from "components/FooterSection.js";
import ExperienceSection from "components/ExperienceSection.js";

function App() {
  return (
    <div id="page-top">
      <Navbar />

      {/* <!-- Masthead--> */}
      <Masthead />
      {/* <!-- About Section--> */}
      <AboutSection />
      {/*portfolio section*/}
      <PortfolioSection />

      {/* <!-- Skills Section--> */}
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
          <div className="row"></div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />
      {/* <!-- Footer--> */}
      <FooterSection />

      {/* <!-- Copyright Section--> */}
      <section className="bg-secondary py-5 text-center text-light">
        <div className="container">
          <small>Copyright © Khoi Phan 2020</small>
        </div>
      </section>
    </div>
  );
}

export default App;
