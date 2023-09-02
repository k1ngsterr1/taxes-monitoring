import React from "react";

import "../styles/footer/footer-styles.css";
import { Link } from "react-scroll";

import Logo from "../assets/LogoTaxWhite.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={Logo} alt="logo" className="logo" />
        <nav className="links">
          <Link to="main" className="link">
            Главная
          </Link>
          <Link to="requirements" className="link">
            Критерии
          </Link>
          <Link to="features" className="link">
            Преимущества
          </Link>
          <Link to="realisation" className="link">
            Реализация
          </Link>
          <Link to="results" className="link">
            Итоги
          </Link>
          <Link to="roadmap" className="link">
            Дорожная карта
          </Link>
          <Link to="last" className="link">
            Результаты
          </Link>
        </nav>
        <button className="request">Оставить заявку</button>
        <figure className="line"></figure>
        <p className="rights">All rights reserved</p>
      </div>
      <div className="footer-pc">
        <div className="links-container">
          <img src={Logo} alt="logo" className="logo" />
          <nav className="links">
            <div className="links-cont">
              <Link className="link" to="main">
                Главная
              </Link>
              <Link className="link" to="features">
                Преимущества
              </Link>
              <Link className="link" to="roadmap">
                Дорожная карта
              </Link>
              <Link className="link" to="main">
                Новости
              </Link>
              <Link className="link" to="main">
                Статьи
              </Link>
            </div>
            <button className="request-button">Оставить заявку</button>
          </nav>
        </div>
        <figure className="line"></figure>
        <p className="rights">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
