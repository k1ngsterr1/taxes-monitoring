import React from "react";

import whiteStar from "../assets/white-star.svg";

interface starProps {
  propsText: string;
}

const Star: React.FC<starProps> = (props) => {
  return (
    <div className="star-container">
      <img className="star-white" src={whiteStar} alt="white-star"></img>
      <p className="star-paragraph">{props.propsText}</p>
    </div>
  );
};

const RealisationScreen = () => {
  return (
    <div className="realisation-screen">
      <div className="container">
        <div className="additional-text">
          <p className="mini-text">Реализация</p>
          <figure className="line"></figure>
        </div>
        <h2 className="heading">
          Что вы получите в процессе <span>Реализации проекта</span>
        </h2>
      </div>
    </div>
  );
};

export default RealisationScreen;
