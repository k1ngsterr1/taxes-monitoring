import React from "react";

import search from "../assets/searchMap.svg";
import settings from "../assets/settingsMap.svg";
import coins from "../assets/coinsMap.svg";
import puzzle from "../assets/puzzleMap.svg";
import stats from "../assets/statsMap.svg";
import rocket from "../assets/rocketMap.svg";

import "../styles/roadmap/roadmap-styles.css";

const Fade = require("react-reveal/Fade");

interface RoadmapProps {
  numberProp: string;
  textProp: string;
  imageProp: string;
}

const RoadmapScreen = () => {
  const Step: React.FC<RoadmapProps> = (props) => {
    return (
      <div className="roadmap-step">
        <span className="number">{props.numberProp}</span>
        <p className="paragraph">{props.textProp}</p>
        <img
          className="roadmap-illustration"
          src={props.imageProp}
          alt="roadmap-step"
        />
      </div>
    );
  };

  return (
    <div className="roadmap-screen" id="roadmap">
      <div className="container">
        <Fade bottom>
          <div className="additional-text">
            <p className="mini-text">Этапы работы</p>
            <figure className="line"></figure>
          </div>
        </Fade>
        <Fade bottom>
          <h2 className="heading">Дорожная карта</h2>
        </Fade>
        <div className="roadmap-container">
          <Fade bottom>
            <Step
              numberProp="01"
              textProp="Диагностика, перечень требуемых изменений"
              imageProp={search}
            ></Step>
          </Fade>
          <Fade bottom>
            <Step
              numberProp="02"
              textProp="Разработка ФТТ и определение совокупной стоимости перехода в НМ"
              imageProp={settings}
            ></Step>
          </Fade>
          <Fade bottom>
            <Step
              numberProp="03"
              textProp="Определение совокупных доходов от перехода в НМ"
              imageProp={coins}
            ></Step>
          </Fade>
          <Fade bottom>
            <Step
              numberProp="04"
              textProp="Методологическая подготовка к проекту"
              imageProp={puzzle}
            ></Step>
          </Fade>
          <Fade bottom>
            <Step
              numberProp="05"
              textProp="Проектные работы"
              imageProp={stats}
            ></Step>
          </Fade>
          <Fade bottom>
            <Step
              numberProp="06"
              textProp="Проектная поддержка по реализованному функционалу"
              imageProp={rocket}
            ></Step>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default RoadmapScreen;
