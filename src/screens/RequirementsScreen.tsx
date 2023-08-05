import React from "react";

import "../styles/requirements/requirements-styles.css";

import star from "../assets/star.svg";

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
        <h2 className="heading">
          Критерии для вступления в <span>налоговый мониторинг</span>
        </h2>
        <img className="star" src={star} alt="star"></img>
        <p className="paragraph">
          На этапе внедрения налогового мониторинга в России перейти на
          налоговый мониторинг могли только самые крупные компании. Постепенно
          критерии для получения права вхождения в налоговый мониторинг
          смягчаются, и сейчас компания должна отвечать одновременно следующим
          требованиям:
        </p>
        <Box
          propNumber="1"
          propHeading="Критерий"
          propText="<span><b>100 млн рублей</b></span> - общая сумма налогов за год"
        ></Box>
        <Box
          propNumber="2"
          propHeading="Критерий"
          propText="<span><b>1 млрд рублей </b></span> - сумма полученных доходов организацией"
        ></Box>
        <Box
          propNumber="3"
          propHeading="Критерий"
          propText="<span><b>1 млрд рублей</b></span> - совокупная стоимость активов."
        ></Box>
        <button className="request">Оставить заявку</button>
      </div>
    </div>
  );
};

export default RequirementsScreen;
