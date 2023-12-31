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
          <div className="content">
            <Fade bottom delay={100}>
              <img
                src={illustrationOne}
                alt="illustration-one"
                className="illustration-one"
              />
            </Fade>
            <div className="text-containez">
              <Fade bottom delay={200}>
                <div className="text-tab">
                  <img src={star} alt="star" className="star" />
                  <p className="paragraph-text">
                    Индикатор высокого уровня автоматизации учетных процессов и
                    прозрачности бизнеса с налоговой точки зрения
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={300}>
                <div className="text-tab">
                  <img src={star} alt="star" className="star" />
                  <p className="paragraph-text">
                    Уникальное на рынке РФ решение, встраиваемое в текущие ИС
                    компании и не зависящее от внешнего поставщика ПО
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={400}>
                <div className="text-tab">
                  <img src={star} alt="star" className="star" />
                  <p className="paragraph-text">
                    Структурированное хранение первичных документов и договоров
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <Fade bottom delay={500}>
          <div className="line-2"></div>
        </Fade>
        <div className="screen-2">
          <div className="content">
            <div className="text-containez">
              <Fade bottom delay={600}>
                <div className="text-tab">
                  <img src={star} alt="star" className="star" />
                  <p className="paragraph-text">
                    База для совершенствования зависимых и кросс-зависимых
                    процессов и процедур в Группе
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={700}>
                <div className="text-tab">
                  <img src={star} alt="star" className="star" />
                  <p className="paragraph-text">
                    Лидерские позиции среди крупнейших компаний по внедрению
                    данного формата взаимодействия с налоговыми органами РФ
                  </p>
                </div>
              </Fade>
              <Fade bottom delay={800}>
                <div className="text-tab">
                  <img src={star} alt="star" className="star" />
                  <p className="paragraph-text">
                    Консистентные, сопоставимые и неизменные учетные данные
                  </p>
                </div>
              </Fade>
            </div>
            <Fade bottom delay={900}>
              <img
                src={illustrationTwo}
                alt="illustration-two"
                className="illustration-two"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastScreen;
