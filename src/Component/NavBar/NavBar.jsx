import React from "react";
import { AppBar } from "@mui/material";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";

const NavBar = () => {
  const logo =
    "https://fontmeme.com/permalink/221108/dce6c1a90373d92c835ccf5163407ad0.png";
  return (
    <div className="navbar">
      <Link className="logo-container" to="/">
        <img className="logo" src={logo} alt="Travellastro" />
      </Link>

      <div className="midTab">
        <p className="para">Anywhere | Any Week | Add Guest</p>
      </div>
    </div>
  );
};

export default NavBar;
