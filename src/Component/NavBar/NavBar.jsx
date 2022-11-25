import React from "react";
import { AppBar, Button, Divider, IconButton } from "@mui/material";
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
      shopcart
      <div className="lastIconsContainer">
        <div className="lastIcons">
          <Button
            style={{
              borderRadius: "30px",
              height: "40px",
              marginTop: "7px",
              color: "#717171",
              border: "1px solid #dddddd",
            }}
          >
            <AccountCircleIcon />
            <b>sign in</b>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
