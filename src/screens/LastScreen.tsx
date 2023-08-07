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
        <Fade bottom>
          <div className="additional-text">
            <p className="mini-text">Результаты</p>
            <figure className="line"></figure>
          </div>
        </Fade>
        <Fade bottom>
          <h2 className="heading">
            Результаты внедрения решения <span>по налоговому мониторингу</span>
          </h2>
        </Fade>
        <div className="taxes-monitoring-one">
          <Fade bottom>
            <div className="star-container">
              <img className="star" src={star} alt="star"></img>
              <p className="star-text">
                Индикатор высокого уровня автоматизации учетных процессов и
                прозрачности бизнеса с налоговой точки зрения
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="star-container">
              <img className="star" src={star} alt="star"></img>
              <p className="star-text">
                Уникальное на рынке РФ решение, встраиваемое в текущие ИС
                компании и не зависящее от внешнего поставщика ПО
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="star-container">
              <img className="star" src={star} alt="star"></img>
              <p className="star-text">
                Структурированное хранение первичных документов и договоров
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <img
              src={illustrationOne}
              alt="illustration"
              className="illustration-one"
            />
          </Fade>
        </div>
        <Fade bottom>
          <figure className="line-2"></figure>
        </Fade>

        <div className="taxes-monitoring-two">
          <div className="star-container">
            <Fade bottom>
              <img src={star} alt="star" className="star" />
              <p className="star-text">
                База для совершенствования зависимых и кросс-зависимых процессов
                и процедур в Группе
              </p>
            </Fade>
          </div>
          <div className="star-container">
            <Fade bottom>
              <img src={star} alt="star" className="star" />
              <p className="star-text">
                Лидерские позиции среди крупнейших компаний по внедрению данного
                формата взаимодействия с налоговыми органами РФ
              </p>
            </Fade>
          </div>
          <div className="star-container">
            <Fade bottom>
              <img src={star} alt="star" className="star" />
              <p className="star-text">
                Консистентные, сопоставимые и неизменные учетные данные
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <img
              src={illustrationTwo}
              alt="illustration"
              className="illustration-two"
            />
          </Fade>
        </div>
      </div>
      <div className="container-box-c">
        <div className="additional-text">
          <figure className="line"></figure>
          <p className="mini-text">Результаты</p>
        </div>
        <h2 className="heading">
          Результаты внедрения решения по <span>налоговому мониторингу</span>
        </h2>
        <div className="screen-1">
          <img
            src={illustrationOne}
            alt="illustration-one"
            className="illustration-one"
          />
          <div className="text-content">
            <div className="text-container">
              <div className="text-tab">
                <img src={star} alt="star" className="star" />
                <p className="paragraph">
                  Индикатор высокого уровня автоматизации учетных процессов и
                  прозрачности бизнеса с налоговой точки зрения
                </p>
              </div>
              <div className="text-tab">
                <img src={star} alt="star" className="star" />
                <p className="paragraph">
                  Уникальное на рынке РФ решение, встраиваемое в текущие ИС
                  компании и не зависящее от внешнего поставщика ПО
                </p>
              </div>
              <div className="text-tab">
                <img src={star} alt="star" className="star" />
                <p className="paragraph">
                  Структурированное хранение первичных документов и договоров
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastScreen;
