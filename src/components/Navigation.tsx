import React from "react";

import { Link } from "react-scroll";

import { stack as Menu } from "react-burger-menu";

var cross_styles = {
  bmCrossButton: {
    top: "clamp(15px,7.009345794392523vw,60px)",
  },

  bmMenu: {
    boxShadow: "0px 0px 37px 15px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
  },

  bmCross: {
    background: "#FF5722",
    width: "5px",
    height: "30px",
  },

  bmItemList: {
    width: "100%",
    height: "auto",
    marginRight: "clamp(12.5px,5.841121495327103vw,50px)",
    marginTop: "clamp(65px,30.373831775700936vw,260px)",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "clamp(11px,5.140186915887851vw,44px)",
    textAlign: "right",
    color: "#FF5722",
    textDecoration: "none",
    overflowX: "hidden",
  },
  bmOverlay: {
    display: "none",
  },
};

const Navigation = () => {
  return (
    <nav className="mob-nav">
      <span className="logo">Logo</span>
      <Menu right styles={cross_styles}>
        <Link>Главная</Link>
      </Menu>
    </nav>
  );
};

export default Navigation;
