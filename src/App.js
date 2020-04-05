import React from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Masthead from "./components/Masthead.js";
import PortfolioSection from "components/PortfolioSection.js";
import AboutSection from "components/AboutSection.js";

function App() {
  return (
    <div id="page-top">
      <Navbar />

      {/* <!-- Masthead--> */}
      <Masthead />

      {/*portfolio section*/}
      <PortfolioSection />

      {/* <!-- About Section--> */}
      <AboutSection />

      {/* <!-- Contact Section--> */}
      <section className="page-section" id="contact">
        <div className="container">
          {/* <!-- Contact Section Heading--> */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact Me
          </h2>
          {/* <!-- Icon Divider--> */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="divider-custom-line"></div>
          </div>
          {/* <!-- Contact Section Form--> */}
          <div className="row"></div>
        </div>
      </section>

      {/* <!-- Footer--> */}
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Footer Location--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="text-uppercase mb-4">
                <h4 className="text-left">Location</h4>
                <div className="separator-1"></div>
              </div>
              <div className="text-left">
                <a className="lead mb-0 ">District 2, HCMC, Vietnam</a>
              </div>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="text-uppercase mb-4">
                <h4 className="text-left">Fine me on the web</h4>
                <div className="separator-1"></div>
              </div>

              <div className="text-left">
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://www.linkedin.com/in/khoi-phan-662511a6/"
                >
                  <i className="fab fa-fw fa-linkedin-in"></i>
                </a>
                <a
                  className="btn btn-outline-light btn-social mx-1"
                  href="https://github.com/khoi148/portfolio-website"
                >
                  <i className="fab fa-fw fa-github"></i>
                </a>
              </div>
            </div>
            {/* <!-- Footer About Text--> */}
            <footer className="col-lg-4">
              <div className="text-uppercase mb-4">
                <h4 className="text-left">Contact</h4>
                <div className="separator-1"></div>
              </div>
              <a className="d-flex align-items-center">
                <i className="fa fa-phone mr-2"></i>
                <p className="lead mb-0 text-left">khoiminhphan@yahoo.com</p>
              </a>
              <br></br>
              <a className="d-flex align-items-center">
                <i className="fa fa-envelope mr-2"></i>
                <p className="lead mb-0 text-left">+84 397 241 763</p>
              </a>
            </footer>
          </div>
        </div>
      </footer>

      {/* <!-- Copyright Section--> */}
      <section className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright © Your Website 2020</small>
        </div>
      </section>
    </div>
  );
}

export default App;
