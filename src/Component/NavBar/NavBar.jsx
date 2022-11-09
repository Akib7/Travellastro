import React from "react";
import { AppBar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

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

      <Button
        variant="secondary"
        style={{
          borderRadius: "30px",
          height: "40px",
          marginTop: "7px",
          fontWeight: "bold",
        }}
      >
        Become a Host
        <IconButton aria-label="language">
          <LanguageIcon />
        </IconButton>
      </Button>
    </div>
  );
};

export default NavBar;
