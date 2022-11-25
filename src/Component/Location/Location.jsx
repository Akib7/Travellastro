import React from "react";
import { Button, Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import "./Location.styles.scss";

const Location = () => {
  return (
    <div className="location">
      <Button
        style={{
          borderRadius: "10px",
          height: "40px",
          marginTop: "7px",
          backgroundColor: "#FFAE5D",
          color: "#717171",
          border: "1px solid #dddddd",
        }}
      >
        {<FmdGoodOutlinedIcon />}Dhaka, 1212
      </Button>
      <Paper
        component="form"
        style={{
          borderRadius: "30px",

          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input className="search-bar" placeholder="Search..." />

        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Location;
