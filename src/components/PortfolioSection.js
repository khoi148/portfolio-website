import React, { useEffect, useState } from "react";
import CABIN from "assets/img/portfolio/imdb-clone.png";
import CAKE from "assets/img/portfolio/weather-app.png";
import CIRCUS from "assets/img/portfolio/currency-converter.png";

export default function PortfolioSection() {
  return (
    <section className="page-section portfolio bg-primary" id="portfolio">
      <div className="container">
        {/* <!-- Portfolio Section Heading--> */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        {/* <!-- Icon Divider--> */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-desktop mr-2"></i>
            <i className="far fa-keyboard"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        {/* <!-- Portfolio Grid Items--> */}
        <div className="row">
          {/* <!-- Portfolio Item 1--> */}
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal1"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={CABIN} alt="" />
            </div>
          </div>
          {/* <!-- Portfolio Item 2--> */}
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal2"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={CAKE} alt="" />
            </div>
          </div>
          {/* <!-- Portfolio Item 3--> */}
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-toggle="modal"
              data-target="#portfolioModal3"
            >
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img className="img-fluid" src={CIRCUS} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Portfolio Modal 1--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Movie Database Search
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-dice-one"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      className="img-fluid rounded mb-5"
                      src={CABIN}
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-0">
                      A website that utilizes an API from{" "}
                      <a href="https://www.themoviedb.org/documentation/api">
                        TMDB
                      </a>
                      , an 3rd party site that provides historical and
                      up-to-date info on the latests movies and films. Users can
                      search for descriptions and release dates from their
                      favorite films, upcoming releases, and sort search results
                      by popularity or rating. A passion project born from my
                      love of movies, it was built using React for rendering and
                      handling state, bootstrap for styling the HTML page, and
                      fontawesome for providing some extra word art aesthetics.
                      Try it out and search for your favorite movie!
                    </p>
                    <div className="d-flex justify-content-center my-4">
                      <a
                        className="btn btn-outline-secondary btn-social mx-1"
                        href="https://github.com/khoi148/imdb-clone"
                      >
                        <i className="fab fa-fw fa-github"></i>
                      </a>
                      <a
                        className="btn btn-outline-secondary btn-social mx-1"
                        href="https://imdb-clone-coderschool.netlify.com"
                      >
                        <i class="far fa-window-restore"></i>
                      </a>
                    </div>
                    <button
                      className="btn btn-primary"
                      href="#"
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 2--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Weather Forecast App
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-dice-two"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img className="img-fluid rounded mb-5" src={CAKE} alt="" />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-0">
                      A website that tells users the weather forecast for the
                      next 5 days. It utilizes an API provided by{" "}
                      <a href="https://openweathermap.org">Openweather.org</a>,
                      and can provide weather forecasts for 5 different cities!
                      One of my early ReactJS projects, utilizing State and
                      encapsulation of code into differentComponents, for a
                      clean and neat weather app.
                    </p>
                    <div className="d-flex justify-content-center my-4">
                      <a
                        className="btn btn-outline-secondary btn-social mx-1"
                        href="https://github.com/khoi148/weather-app"
                      >
                        <i className="fab fa-fw fa-github"></i>
                      </a>
                      <a
                        className="btn btn-outline-secondary btn-social mx-1"
                        href="https://weather-app-coderschool1.netlify.com"
                      >
                        <i class="far fa-window-restore"></i>
                      </a>
                    </div>
                    <button
                      className="btn btn-primary"
                      href="#"
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Portfolio Modal 3--> */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="portfolioModal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <button
              className="close"
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">
                <i className="fas fa-times"></i>
              </span>
            </button>
            <div className="modal-body text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                      Currency Converter Tool
                    </h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                      <div className="divider-custom-line"></div>
                      <div className="divider-custom-icon">
                        <i className="fas fa-dice-three"></i>
                      </div>
                      <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <img
                      className="img-fluid rounded mb-5"
                      src={CIRCUS}
                      alt=""
                    />
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p className="mb-0">
                      A useful website for converting currencies. Built with
                      vanilla HTML/CSS/Javascript, it can convert 5 different
                      currencies amongst each other. One of my first and
                      favorite projects!
                    </p>
                    <div className="d-flex justify-content-center my-4">
                      <a
                        className="btn btn-outline-secondary btn-social mx-1"
                        href="https://github.com/khoi148/CurrencyConverter-Coderschool"
                      >
                        <i className="fab fa-fw fa-github"></i>
                      </a>
                      <a
                        className="btn btn-outline-secondary btn-social mx-1"
                        href="https://currency-calculator-coderschool.netlify.com"
                      >
                        <i class="far fa-window-restore"></i>
                      </a>
                    </div>
                    <button
                      className="btn btn-primary"
                      href="#"
                      data-dismiss="modal"
                    >
                      <i className="fas fa-times fa-fw"></i>Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
