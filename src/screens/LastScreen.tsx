import React from "react";

import illustrationOne from "../assets/taxesMonitoring.svg";
import illustrationTwo from "../assets/statsIllustration.svg";
import star from "../assets/star.svg";

import "../styles/last/last-styles.css";

const Fade = require("react-reveal/Fade");

const LastScreen = () => {
  return (
    <div className="last-screen" id="last">
      <div className="container">
        <Fade bottom delay={100}>
          <div className="additional-text">
            <p className="mini-text">Результаты</p>
            <figure className="line"></figure>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <h2 className="heading">
            Результаты внедрения решения <span>по налоговому мониторингу</span>
          </h2>
        </Fade>
        <div className="taxes-monitoring-one">
          <Fade bottom delay={300}>
            <div className="star-container">
              <img className="star" src={star} alt="star"></img>
              <p className="star-text">
                Индикатор высокого уровня автоматизации учетных процессов и
                прозрачности бизнеса с налоговой точки зрения
              </p>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="star-container">
              <img className="star" src={star} alt="star"></img>
              <p className="star-text">
                Уникальное на рынке РФ решение, встраиваемое в текущие ИС
                компании и не зависящее от внешнего поставщика ПО
              </p>
            </div>
          </Fade>
          <Fade bottom delay={500}>
            <div className="star-container">
              <img className="star" src={star} alt="star"></img>
              <p className="star-text">
                Структурированное хранение первичных документов и договоров
              </p>
            </div>
          </Fade>
          <Fade bottom delay={600}>
            <img
              src={illustrationOne}
              alt="illustration"
              className="illustration-one"
            />
          </Fade>
        </div>
        <Fade bottom delay={700}>
          <figure className="line-2"></figure>
        </Fade>

        <div className="taxes-monitoring-two">
          <div className="star-container">
            <Fade bottom delay={800}>
              <img src={star} alt="star" className="star" />
              <p className="star-text">
                База для совершенствования зависимых и кросс-зависимых процессов
                и процедур в Группе
              </p>
            </Fade>
          </div>
          <div className="star-container">
            <img src={star} alt="star" className="star" />
            <p className="star-text">
              Лидерские позиции среди крупнейших компаний по внедрению данного
              формата взаимодействия с налоговыми органами РФ
            </p>
          </div>
          <div className="star-container">
            <img src={star} alt="star" className="star" />
            <p className="star-text">
              Консистентные, сопоставимые и неизменные учетные данные
            </p>
          </div>
          <img
            src={illustrationTwo}
            alt="illustration"
            className="illustration-two"
          />
        </div>
      </div>
    </div>
  );
};

export default LastScreen;
