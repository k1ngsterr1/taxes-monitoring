import React from "react";

import star from "../assets/star.svg";
import "../styles/results/results-styles.css";

const Fade = require("react-reveal/Fade");

interface StarTabProps {
  propsText: string;
}

const ResultsScreen = () => {
  const StarTab: React.FC<StarTabProps> = (props) => {
    return (
      <div className="star-tab">
        <img className="star" src={star} alt="star"></img>
        <p className="star-text">{props.propsText}</p>
      </div>
    );
  };

  const StarTabMedium: React.FC<StarTabProps> = (props) => {
    return (
      <div className="star-tab-m">
        <img className="star" src={star} alt="star"></img>
        <p className="star-text">{props.propsText}</p>
      </div>
    );
  };

  const StarTabBig: React.FC<StarTabProps> = (props) => {
    return (
      <div className="star-tab-b">
        <img className="star" src={star} alt="star"></img>
        <p className="star-text">{props.propsText}</p>
      </div>
    );
  };

  return (
    <div className="results-screen" id="results">
      <div className="container">
        <Fade bottom delay={100}>
          <div className="additional-text">
            <p className="mini-text">Итоги</p>
            <figure className="line"></figure>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <h2 className="heading">
            Что вы получите по <span>итогам проекта</span>
          </h2>
        </Fade>
        <Fade bottom delay={300}>
          <StarTab propsText="Комплексное решение"></StarTab>
        </Fade>
        <Fade bottom delay={400}>
          <StarTab propsText="Интеграцию с АИС Налог-3"></StarTab>
        </Fade>
        <Fade bottom delay={500}>
          <StarTab propsText="Техническую поддержку решения"></StarTab>
        </Fade>
        <Fade bottom delay={600}>
          <figure className="between-line"></figure>
        </Fade>
        <Fade bottom delay={700}>
          <StarTabMedium propsText="Решение может взаимодействовать с любыми учтёнными системами"></StarTabMedium>
        </Fade>
        <Fade bottom delay={800}>
          <StarTabMedium propsText="Легко тиражируемое решение на другие компании группы"></StarTabMedium>
        </Fade>
        <Fade bottom delay={900}>
          <StarTabMedium propsText="Комплект методологических, регламентных и иных документов"></StarTabMedium>
        </Fade>
        <Fade bottom delay={1000}>
          <figure className="between-line"></figure>
        </Fade>
        <Fade bottom delay={1100}>
          <StarTabBig
            propsText="Подсистему обработки запросов от налоговых инспекторов с отчетом о действиях
        пользователей"
          ></StarTabBig>
        </Fade>
        <Fade bottom delay={1200}>
          <StarTabBig
            propsText="Эффективную ролевую модель, с минимальным количеством ролей и конфликтов в
          решении"
          ></StarTabBig>
        </Fade>
        <Fade bottom delay={1300}>
          <StarTabBig propsText="Модели раскрытия отчетности с надстроенными контрольными соотношениями"></StarTabBig>
        </Fade>
      </div>
    </div>
  );
};

export default ResultsScreen;
