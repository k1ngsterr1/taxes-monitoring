import React from "react";

import "../styles/realisation/realisation-styles.css";

import starI from "../assets/star.svg";
import illustration from "../assets/IllustrationRealisation.svg";

const Fade = require("react-reveal/Fade");

interface starProps {
  propsText: string;
}

const Star: React.FC<starProps> = (props) => {
  return (
    <div className="star-container">
      <img className="star-white" src={starI} alt="white-star"></img>
      <p className="star-paragraph">{props.propsText}</p>
    </div>
  );
};

const RealisationScreen = () => {
  return (
    <div className="realisation-screen" id="realisation">
      <div className="container">
        <Fade bottom>
          <div className="additional-text">
            <p className="mini-text">Реализация</p>
            <figure className="line"></figure>
          </div>
        </Fade>
        <Fade bottom>
          <h2 className="heading">
            Что вы получите в процессе <span>Реализации проекта</span>
          </h2>
        </Fade>
        <div className="stars">
          <Fade bottom>
            <Star propsText="Экспертную команду с реальным опытом разработки и внедрения решения"></Star>
          </Fade>
          <Fade>
            <Star
              propsText="Первичную экспертизу методических документов и формирование детального ТЗ с
            бизнесом"
            ></Star>
          </Fade>
          <Fade bottom>
            <Star propsText="Обсуждение этапов внедрения, узких мест и ошибок"></Star>{" "}
          </Fade>
          <Fade bottom>
            <Star propsText="Фокус на требования контрольной среды и существующие бизнес-процессы компании"></Star>
          </Fade>
        </div>
        <Fade bottom>
          <img
            className="illustration"
            src={illustration}
            alt="illustration"
          ></img>
        </Fade>
      </div>
      <div className="container-box-c">
        <Fade bottom delay={100}>
          <div className="additional-text">
            <figure className="line"></figure>
            <p className="mini-text">Реализация</p>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <h2 className="heading">
            Что вы получите в процессе <span>реализации проекта</span>
          </h2>
        </Fade>
        <div className="content">
          <div className="text-content">
            <Fade bottom delay={300}>
              <Star propsText="Экспертную команду с реальным опытом разработки и внедрения решения"></Star>
            </Fade>
            <Fade bottom delay={400}>
              <Star
                propsText="Первичную экспертизу методических документов и формирование детального ТЗ с
            бизнесом"
              ></Star>
            </Fade>
            <Fade bottom delay={500}>
              <Star propsText="Обсуждение этапов внедрения, узких мест и ошибок"></Star>
            </Fade>
            <Fade bottom delay={600}>
              <Star propsText="Фокус на требования контрольной среды и существующие бизнес-процессы компании"></Star>
            </Fade>
          </div>
          <Fade bottom delay={700}></Fade>
          <img src={illustration} alt="illustration" className="illustration" />
        </div>
      </div>
    </div>
  );
};

export default RealisationScreen;
