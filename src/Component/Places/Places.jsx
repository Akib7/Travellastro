import React from "react";
import { Grid, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./Places.styles.scss";
import SwiperData from "../Swiper/Swiper";
const Places = ({ name, imageUrl, kilo, date, price, time, rating }) => {
  return (
    <div className="container">
      <Grid container className="placeContainer">
        {/* <SwiperData /> */}
        <img src={imageUrl} alt="places" className="image" />
        <Grid container item className="downwardTexts">
          <Grid item>
            <Typography
              variant="subtitle1"
              style={{
                fontWeight: "bold",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "290px",
                overflow: "hidden",
              }}
            >
              {name}
            </Typography>
            <Typography variant="body2" style={{ color: "#717171" }}>
              {kilo}
            </Typography>
            <Typography variant="body2" style={{ color: "#717171" }}>
              {date}
            </Typography>
            <Typography variant="body2">
              <p>
                <b>{price}</b> {time}
              </p>
            </Typography>
          </Grid>
          <Typography variant="subtitle1" style={{ fontSize: "12px" }}>
            {<StarRateIcon style={{ height: "15px" }} />}
            {rating}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Places;
