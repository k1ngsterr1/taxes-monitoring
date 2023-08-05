import React from "react";
import Navigation from "../components/Navigation";

import "../styles/main/main-styles.css";

import Illustration from "../assets/IllustrationMain.svg";
import arrow from "../assets/arrow.svg";

const Fade = require("react-reveal/Fade");

const MainScreen = () => {
  return (
    <div className="main-screen" id="main">
      <Navigation />

      <div className="container">
        <main className="main-content">
          <Fade bottom>
            <div className="additional-text">
              <span className="mini-text">
                Преимущества налогового мониторинга
              </span>
              <figure className="line"></figure>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <h1 className="heading">
              О НАЛОГОВОМ <span>МОНИТОРИНГЕ</span>
            </h1>
          </Fade>
          <Fade bottom delay={300}>
            <p className="paragraph">
              <b>Налоговый мониторинг</b> – добровольная альтернативная форма
              налогового контроля, которая заменяет стандартные выездные и
              камеральные налоговые проверки.
            </p>
          </Fade>
          <Fade bottom delay={400}>
            <img
              className="illustration"
              src={Illustration}
              alt="main-illustration"
            ></img>
          </Fade>
          <Fade bottom delay={500}>
            <button className="consult-button">Получить консультацию</button>
          </Fade>
          <Fade bottom delay={600}>
            <button className="more-button">Подробнее</button>
          </Fade>
          <Fade bottom delay={700}>
            <img className="arrow" src={arrow} alt="arrow"></img>
          </Fade>
        </main>
      </div>
    </div>
  );
};

export default MainScreen;
