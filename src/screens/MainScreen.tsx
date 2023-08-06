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
      <div className="container-box">
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
        <main className="main-content-pc">
          <div className="text-content">
            <div className="additional-text">
              <figure className="line"></figure>
              <p className="mini-text">Преимущества налогового мониторинга</p>
            </div>
            <h1 className="heading">
              О налоговом <span>мониторинге</span>
            </h1>
            <p className="paragraph">
              {" "}
              <b>Налоговый мониторинг</b>– добровольная альтернативная форма
              налогового контроля, которая заменяет стандартные выездные и
              камеральные налоговые проверки.
            </p>
            <div className="buttons">
              <button className="main-button">Получить консультацию</button>
              <button className="more-button">Подробнее</button>
            </div>
          </div>
          <img src={Illustration} alt="illustration" className="illustration" />
        </main>
        <img className="arrow" src={arrow} alt="arrow"></img>
      </div>
    </div>
  );
};

export default MainScreen;
