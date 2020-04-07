import React from "react";
import "./App.css";
import Navbar from "components/Navbar.js";
import Masthead from "components/Masthead.js";
import PortfolioSection from "components/PortfolioSection.js";
import AboutSection from "components/AboutSection.js";
import FooterSection from "components/FooterSection.js";
import ExperienceSection from "components/ExperienceSection.js";
import SkillsSection from "components/SkillsSection.js";
import ContactSection from "components/ContactSection.js";
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
      <SkillsSection />

      {/* Experience Section */}
      <ExperienceSection />

      {/* Contact me section  */}
      {/* <ContactSection /> */}

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
