import React from "react";

import "../styles/footer/footer-styles.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="logo">Logo</p>
        <nav className="links">
          <Link className="link">Главная</Link>
          <Link className="link">Преимущества</Link>
          <Link className="link">Дорожная карта</Link>
          <Link className="link">Новости</Link>
          <Link className="link">Статьи</Link>
        </nav>
        <button className="request">Оставить заявку</button>
        <figure className="line"></figure>
        <p className="rights">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
