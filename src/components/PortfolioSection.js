import React from "react";
import CABIN from "assets/img/portfolio/imdb-clone.png";
import CAKE from "assets/img/portfolio/weather-app.png";
import CIRCUS from "assets/img/portfolio/currency-converter.png";
import PortfolioItem from "components/PortfolioItem.js";
import TODO from "assets/img/portfolio/todoList.png";
import TICTAC from "assets/img/portfolio/TICTAC.png";
import TWITTER from "assets/img/portfolio/Twitter.png";
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
const BODY4 = `A webpage that acts as a to-do list. You can add tasks with 
different priorities, delete them, show completed/noncompleted tasks, and 
sort by priority. This was one of my earlier HTML/CSS demo projects, and 
shows how a developer can be creative in desigining a simple HTML page.`;
const BODY5 = `The game of Tic-Tac-Toe with an extra twist feature - the ability
              to go back in time to your previous moves, and resume the game from there!
              Built using React, this project was useful in showcasing how React's
              state and props could be used to rerender board states in a turn-based game.
              Try it with player 2!`;
const BODY6 = `One of my pair projects. Here we created a Twitter webpage clone,
complete with the ability to tweet, retweet, delete tweets, and even paste
img URLs that would expand the img in a tweet. A great use of plain vanilla
javascript and bootstrap HTML/CSS to build a function client side webpage.
Tweet to your heart's content!`;
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
  const ITEM4 = {
    id: 4,
    imgSrc: TODO,
    git: "https://github.com/khoi148/todoList_webpage",
    deploy: "https://todolist-coderschool2020.netlify.com",
    body: BODY4,
    title: "To-do List App",
  };
  const ITEM5 = {
    id: 5,
    imgSrc: TICTAC,
    git: "https://github.com/khoi148/tic-tac-toe",
    deploy: "https://tic-tac-toe-khoi.netlify.com",
    body: BODY5,
    title: "To-do List App",
  };
  const ITEM6 = {
    id: 6,
    imgSrc: TWITTER,
    git: "https://github.com/khoi148/twitter-clone",
    deploy: "https://twitter-clone-coderschool.netlify.com",
    body: BODY6,
    title: "To-do List App",
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
        <div className="row">
          <PortfolioItem content={ITEM4} />
          <PortfolioItem content={ITEM5} />
          <PortfolioItem content={ITEM6} />
        </div>
        <h4 className="text-center">Click on a project above to see more</h4>
      </div>
    </section>
  );
}
