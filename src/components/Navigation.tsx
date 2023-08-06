import React from "react";

import { Link } from "react-scroll";

import { stack as Menu } from "react-burger-menu";

import "../styles/navigation/navigation-styles.css";

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "clamp(16px,7.47648vw,64px)",
    height: "clamp(14.5px,6.77556vw,58px)",
    right: "clamp(12px,5.60736vw,48px)",
    top: "clamp(17.5px,8.177399999999999vw,70px)",
  },
  bmBurgerBars: {
    background: "#032727",
    width: "clamp(17.5px,8.177399999999999vw,70px)",
    height: "clamp(2px,0.93456vw,8px)",
    borderRadius: "120px",
  },
  bmBurgerBarsHover: {
    background: "#1f1f1f",
  },
  bmCrossButton: {
    height: "clamp(24px,11.21472vw,96px)",
    width: "clamp(24px,11.21472vw,96px)",
    left: "clamp(110px,51.4008vw,440px)",
    right: "clamp(32px,3.3333333333333335vw,128px)",
    top: "clamp(16px,7.47648vw,64px)",
    bottom: "0",
    overflowX: "hidden",
  },
  bmCross: {
    background: "#032727",
    width: "3px",
    height: "clamp(16px,7.47648vw,64px)",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    top: "0px",
  },
  bmMenu: {
    background: "#FFFFFF",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
    overflowX: "hidden",
    overflowY: "hidden",
    boxShadow: "0px 0px 37px 15px rgba(0, 0, 0, 0.25)",
  },

  bmMorphShape: {
    fill: "#373a47",
  },

  bmItemList: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingRight: "0px",
    paddingLeft: "10px",
    paddingTop: "clamp(32px,14.95296vw,128px)",
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "clamp(12px,5.60736vw,48px)",
    textAlign: "right",
    color: "#168D42",
    overflowX: "hidden",
  },

  bmItem: {
    display: "inline-block",
    marginTop: "clamp(16px,7.47648vw,64px)",
  },

  bmOverlay: {
    left: "0",
    right: "0",
    bottom: "0",
    top: "0",
    width: "100vw",
    height: "clamp(5666.3px,590.2395833333334vw,22665.2px)",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.0)",
  },
};

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="mob-nav">
        <span className="logo">Logo</span>
        <Menu right styles={styles}>
          <Link to="main">Главная</Link>
          <Link to="requirements">Критерии</Link>
          <Link to="features">Преимущества</Link>
          <Link to="realisation">Реализация</Link>
          <Link to="results">Итоги</Link>
          <Link to="roadmap">Дорожная карта</Link>
          <Link to="last">Результаты</Link>
        </Menu>
      </div>
      <div className="pc-nav">
        <div className="pc-nav-container">
          <span className="logo">Logo</span>
          <div className="links-container">
            <div className="links">
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
              <Link to="last" className="link results">
                Результаты
              </Link>
            </div>
            <button className="request-btn">Оставить заявку</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
