import React from "react";

import "../styles/features/features-styles.css";

import whiteStar from "../assets/white-star.svg";

const Fade = require("react-reveal/Fade");

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
        <Fade bottom delay={100}>
          <div className="additional-text">
            <p className="mini-text">Наши преимущества</p>
            <figure className="line"></figure>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <h2 className="heading">Преимущества решения Профэкспертиза</h2>
        </Fade>

        <div className="stars">
          <Fade bottom delay={300}>
            <Star propsText="Первый продукт на рынке при поддержке практиков – налоговых экспертов"></Star>
          </Fade>
          <Fade bottom delay={400}>
            <Star propsText="Готовая методика оценки эффектов от перехода на налоговый мониторинг для бизнеса"></Star>
          </Fade>
          <Fade bottom delay={500}>
            <Star propsText="Функционал не только для инспекций, но и для компании"></Star>
          </Fade>
          <Fade bottom delay={600}>
            <Star
              propsText="Продуктовый подход к ИТ-решению: поддержка решения и развитие сервисных функций в
            рамках подписки(лицензии)"
            ></Star>
          </Fade>
        </div>

        <Fade bottom delay={700}>
          <button className="request-btn">Оставить заявку</button>
        </Fade>
      </div>
      <div className="container-box-pc">
        <div className="additional-text">
          <figure className="line"></figure>
          <p className="mini-text">Наши преимущества</p>
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
        <button className="request">Получить консультацию</button>
      </div>
    </div>
  );
};

export default FeaturesScreen;
