import React from "react";

import "../styles/requirements/requirements-styles.css";

import star from "../assets/star.svg";

const Fade = require("react-reveal/Fade");

interface BoxProps {
  propNumber: string;
  propHeading: string;
  propText: string;
}

const RequirementsScreen = () => {
  const Box: React.FC<BoxProps> = (props) => {
    return (
      <div className="box">
        <div className="number-container">
          <p className="number">{props.propNumber}</p>
        </div>
        <h3 className="box-heading">{props.propHeading}</h3>
        <p
          className="box-text"
          dangerouslySetInnerHTML={{ __html: props.propText }}
        ></p>
      </div>
    );
  };

  return (
    <div className="requirements-screen" id="requirements">
      <div className="container-box">
        <Fade bottom>
          <h2 className="heading">
            Критерии для вступления в <span>налоговый мониторинг</span>
          </h2>
        </Fade>
        <Fade bottom>
          <img className="star" src={star} alt="star"></img>
        </Fade>
        <Fade bottom>
          <p className="paragraph">
            На этапе внедрения налогового мониторинга в России перейти на
            налоговый мониторинг могли только самые крупные компании. Постепенно
            критерии для получения права вхождения в налоговый мониторинг
            смягчаются, и сейчас компания должна отвечать одновременно следующим
            требованиям:
          </p>
        </Fade>
        <Fade bottom>
          <Box
            propNumber="1"
            propHeading="Критерий"
            propText="<span><b>100 млн рублей</b></span> - общая сумма налогов за год"
          ></Box>
        </Fade>
        <Fade bottom>
          <Box
            propNumber="2"
            propHeading="Критерий"
            propText="<span><b>1 млрд рублей </b></span> - сумма полученных доходов организацией"
          ></Box>
        </Fade>
        <Fade bottom>
          <Box
            propNumber="3"
            propHeading="Критерий"
            propText="<span><b>1 млрд рублей</b></span> - совокупная стоимость активов."
          ></Box>
        </Fade>
        <Fade bottom>
          <button className="request">Оставить заявку</button>
        </Fade>
      </div>
      <div className="container-box-pc">
        <h2 className="heading">
          Критерии для вступления в <span>налоговый мониторинг</span>
        </h2>
        <div className="tab">
          <img src={star} alt="star" className="star" />
          <p className="tab-text">
            На этапе внедрения налогового мониторинга в России перейти на
            налоговый мониторинг могли только самые крупные компании. Постепенно
            критерии для получения права вхождения в налоговый мониторинг
            смягчаются, и сейчас компания должна отвечать одновременно следующим
            требованиям:
          </p>
        </div>
        <div className="boxes">
          <Box
            propNumber="1"
            propHeading="Критерий"
            propText="<span><b>100 млн рублей</b></span> - общая сумма налогов за год"
          ></Box>
          <Box
            propNumber="1"
            propHeading="Критерий"
            propText="1 млрд рублей - сумма полученных доходов организацией"
          ></Box>
          <Box
            propNumber="1"
            propHeading="Критерий"
            propText="1 млрд рублей - совокупная стоимость активов."
          ></Box>
          <button className="request">Оставить заявку</button>
        </div>
      </div>
    </div>
  );
};

export default RequirementsScreen;
