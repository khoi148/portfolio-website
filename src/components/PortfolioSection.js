import React from "react";
import CABIN from "assets/img/portfolio/imdb-clone.png";
import CAKE from "assets/img/portfolio/weather-app.png";
import CIRCUS from "assets/img/portfolio/currency-converter.png";
import PortfolioItem from "components/PortfolioItem.js";

const BODY1 = `<a href="https://www.themoviedb.org/documentation/api">
TMDB</a>, an 3rd party site that provides historical and up-to-date
info on the latests movies and films. Users can search for
descriptions and release dates from their favorite films,
upcoming releases, and sort search results by popularity or
rating. A passion project born from my love of movies, it
was built using React for rendering and handling state,
bootstrap for styling the HTML page, and fontawesome for
providing some extra word art aesthetics. Try it out and
search for your favorite movie!`;

const BODY2 = `A website that tells users the weather forecast for the
next 5 days. It utilizes an API provided by{" "}
<a href="https://openweathermap.org">Openweather.org</a>,
and can provide weather forecasts for 5 different cities!
One of my early ReactJS projects, utilizing State and
encapsulation of code into differentComponents, for a
clean and neat weather app.`;

const BODY3 = `A useful website for converting currencies. Built with
vanilla HTML/CSS/Javascript, it can convert 5 different
currencies amongst each other. One of my first and
favorite projects!`;

export default function PortfolioSection() {
  const ITEM1 = {
    id: 1,
    imgSrc: CABIN,
    git: "https://github.com/khoi148/imdb-clone",
    deploy: "https://imdb-clone-coderschool.netlify.com",
    body: BODY1,
    title: "The Movie Database",
  };
  const ITEM2 = {
    id: 2,
    imgSrc: CAKE,
    git: "https://github.com/khoi148/weather-app",
    deploy: "https://weather-app-coderschool1.netlify.com",
    body: BODY2,
    title: "Weather Forecast App",
  };
  const ITEM3 = {
    id: 3,
    imgSrc: CIRCUS,
    git: "https://github.com/khoi148/CurrencyConverter-Coderschool",
    deploy: "https://currency-calculator-coderschool.netlify.com",
    body: BODY3,
    title: "Currency Converter Tool",
  };
  console.log("item hahaha", ITEM1);
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
          <PortfolioItem content={ITEM1} />
          <PortfolioItem content={ITEM2} />
          <PortfolioItem content={ITEM3} />
        </div>
      </div>
    </section>
  );
}
