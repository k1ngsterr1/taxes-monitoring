import React from "react";
import Navigation from "../components/Navigation";

import "../styles/main/main-styles.css";

import Illustration from "../assets/IllustrationMain.svg";
import arrow from "../assets/arrow.svg";

const MainScreen = () => {
  return (
    <div className="main-screen" id="main">
      <Navigation />
      <div className="container">
        <main className="main-content">
          <div className="additional-text">
            <span className="mini-text">
              Преимущества налогового мониторинга
            </span>
            <figure className="line"></figure>
          </div>
          <h1 className="heading">
            О НАЛОГОВОМ <span>МОНИТОРИНГЕ</span>
          </h1>
          <p className="paragraph">
            <b>Налоговый мониторинг</b> – добровольная альтернативная форма
            налогового контроля, которая заменяет стандартные выездные и
            камеральные налоговые проверки.
          </p>
          <img
            className="illustration"
            src={Illustration}
            alt="main-illustration"
          ></img>
          <button className="consult-button">Получить консультацию</button>
          <button className="more-button">Подробнее</button>
          <img className="arrow" src={arrow} alt="arrow"></img>
        </main>
      </div>
    </div>
  );
};

export default MainScreen;
