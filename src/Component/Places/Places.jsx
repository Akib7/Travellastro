import React from "react";
import { Grid, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./Places.styles.scss";
const Places = ({ place, image, kilo, date, price }) => {
  return (
    <div className="container">
      <Grid container className="placeContainer">
        <img
          src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=960"
          alt="places"
          className="image"
        />
        <Grid container item className="downwardTexts">
          <Grid item>
            <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
              Abiansemal, Indonesia
            </Typography>
            <Typography variant="body2" style={{ color: "#717171" }}>
              4490, Kilometer Away
            </Typography>
            <Typography variant="body2" style={{ color: "#717171" }}>
              Sep 10 - 15
            </Typography>
            <Typography variant="body2">
              <p>
                <b>$360</b> night
              </p>
            </Typography>
          </Grid>
          <Typography variant="subtitle1">
            {<StarRateIcon style={{ height: "15px" }} />}4.7
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Places;
