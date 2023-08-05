import React from "react";

import star from "../assets/star.svg";
import "../styles/results/results-styles.css";

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
        <div className="additional-text">
          <p className="mini-text">Итоги</p>
          <figure className="line"></figure>
        </div>
        <h2 className="heading">
          Что вы получите по <span>итогам проекта</span>
        </h2>
        <StarTab propsText="Комплексное решение"></StarTab>
        <StarTab propsText="Интеграцию с АИС Налог-3"></StarTab>
        <StarTab propsText="Техническую поддержку решения"></StarTab>
        <figure className="between-line"></figure>
        <StarTabMedium propsText="Решение может взаимодействовать с любыми учтёнными системами"></StarTabMedium>
        <StarTabMedium propsText="Легко тиражируемое решение на другие компании группы"></StarTabMedium>
        <StarTabMedium propsText="Комплект методологических, регламентных и иных документов"></StarTabMedium>
        <figure className="between-line"></figure>
        <StarTabBig
          propsText="Подсистему обработки запросов от налоговых инспекторов с отчетом о действиях
        пользователей"
        ></StarTabBig>
        <StarTabBig
          propsText="Эффективную ролевую модель, с минимальным количеством ролей и конфликтов в
          решении"
        ></StarTabBig>
        <StarTabBig propsText="Модели раскрытия отчетности с надстроенными контрольными соотношениями"></StarTabBig>
      </div>
    </div>
  );
};

export default ResultsScreen;
