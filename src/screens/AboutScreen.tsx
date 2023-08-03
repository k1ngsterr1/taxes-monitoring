import React from "react";
import "../styles/about/about-styles.css";

import star from "../assets/star.svg";

interface TabProps {
  propText: string;
}

const AboutScreen = () => {
  const Tab: React.FC<TabProps> = (props) => {
    return (
      <div className="tab">
        <img className="star" src={star} alt="star"></img>
        <p className="tab-text">{props.propText}</p>
      </div>
    );
  };

  return (
    <div className="about-screen">
      <div className="container">
        <div className="additional-text">
          <span className="mini-text">О налоговом мониторинге</span>
          <figure className="line"></figure>
          <h2 className="heading">
            Что дает организациям переход на <span>налоговый мониторинг</span>
          </h2>
          <div className="tabs"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutScreen;
