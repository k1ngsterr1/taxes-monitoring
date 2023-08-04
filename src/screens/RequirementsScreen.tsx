import React from "react";

import "../styles/requirements/requirements-styles.css";

import star from "../assets/star.svg";

const RequirementsScreen = () => {
  return (
    <div className="requirements-screen">
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
      </div>
    </div>
  );
};

export default RequirementsScreen;
