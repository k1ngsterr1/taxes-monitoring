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
      <div className="container">
        <Fade bottom delay={100}>
          <h2 className="heading">
            Критерии для вступления в <span>налоговый мониторинг</span>
          </h2>
        </Fade>
        <Fade bottom delay={200}>
          <img className="star" src={star} alt="star"></img>
        </Fade>
        <Fade bottom delay={300}>
          <p className="paragraph">
            На этапе внедрения налогового мониторинга в России перейти на
            налоговый мониторинг могли только самые крупные компании. Постепенно
            критерии для получения права вхождения в налоговый мониторинг
            смягчаются, и сейчас компания должна отвечать одновременно следующим
            требованиям:
          </p>
        </Fade>
        <Fade bottom delay={400}>
          <Box
            propNumber="1"
            propHeading="Критерий"
            propText="<span><b>100 млн рублей</b></span> - общая сумма налогов за год"
          ></Box>
        </Fade>
        <Fade bottom delay={500}>
          <Box
            propNumber="2"
            propHeading="Критерий"
            propText="<span><b>1 млрд рублей </b></span> - сумма полученных доходов организацией"
          ></Box>
        </Fade>
        <Fade bottom delay={600}>
          <Box
            propNumber="3"
            propHeading="Критерий"
            propText="<span><b>1 млрд рублей</b></span> - совокупная стоимость активов."
          ></Box>
        </Fade>
        <Fade bottom delay={700}>
          <button className="request">Оставить заявку</button>
        </Fade>
      </div>
    </div>
  );
};

export default RequirementsScreen;
