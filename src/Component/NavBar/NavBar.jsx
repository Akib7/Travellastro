import React from "react";
import { AppBar, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

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
        <Button
          className="para"
          style={{ display: "flex", paddingTop: "10px", color: "black" }}
        >
          Anywhere | Any Week | Add Guest{" "}
          {<SearchIcon style={{ color: "#FF385C" }} />}
        </Button>
      </div>

      <div className="host">
        <Button
          variant="secondary"
          style={{
            borderRadius: "30px",
          }}
        >
          Become a Host
        </Button>
        <IconButton aria-label="language">
          <LanguageIcon />
        </IconButton>
      </div>

      <div className="lastIconsContainer">
        <div className="lastIcons">
          <Button
            style={{
              borderRadius: "30px",
              height: "40px",
              marginTop: "7px",
              color: "#717171",
            }}
          >
            <MenuIcon />
            <AccountCircleIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
