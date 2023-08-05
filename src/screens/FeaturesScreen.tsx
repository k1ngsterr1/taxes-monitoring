import React from "react";

import "../styles/features/features-styles.css";

import whiteStar from "../assets/white-star.svg";

interface starProps {
  propsText: string;
}

const FeaturesScreen = () => {
  const Star: React.FC<starProps> = (props) => {
    return (
      <div className="star-container">
        <img className="star-white" src={whiteStar} alt="white-star"></img>
        <p className="star-paragraph">{props.propsText}</p>
      </div>
    );
  };

  return (
    <div className="features-screen" id="features">
      <div className="container">
        <div className="additional-text">
          <p className="mini-text">Наши преимущества</p>
          <figure className="line"></figure>
        </div>
        <h2 className="heading">Преимущества решения Профэкспертиза</h2>
        <div className="stars">
          <Star propsText="Первый продукт на рынке при поддержке практиков – налоговых экспертов"></Star>
          <Star propsText="Готовая методика оценки эффектов от перехода на налоговый мониторинг для бизнеса"></Star>
          <Star propsText="Функционал не только для инспекций, но и для компании"></Star>
          <Star
            propsText="Продуктовый подход к ИТ-решению: поддержка решения и развитие сервисных функций в
            рамках подписки(лицензии)"
          ></Star>
        </div>
        <button className="request-btn">Оставить заявку</button>
      </div>
    </div>
  );
};

export default FeaturesScreen;
