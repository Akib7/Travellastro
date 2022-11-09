import React from "react";
import { Grid } from "@mui/material";

import "./Places.styles.scss";
const Places = () => {
  return (
    <div>
      <Grid container className="placeContainer">
        <img
          src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=960"
          alt="places"
          className="image"
        />
      </Grid>
    </div>
  );
};

export default Places;
