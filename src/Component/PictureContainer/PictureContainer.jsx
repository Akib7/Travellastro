import { Grid } from "@mui/material";
import React from "react";

const PictureContainer = ({ image }) => {
  return (
    <Grid container className="picture-container">
      <div className="feature-image">
        <img src={image} />
      </div>
    </Grid>
  );
};

export default PictureContainer;
