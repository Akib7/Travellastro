import React from "react";
import { Grid } from "@mui/material";

import "./PictureContainer.styles.scss";

const PictureContainer = ({ image, alt }) => {
  return (
    <div className="picture-container">
      <img src={image} alt={alt} className="image" />
    </div>
  );
};

export default PictureContainer;
