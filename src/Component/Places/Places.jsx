import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

import "./Places.styles.scss";
import SwiperData from "../Swiper/Swiper";
const Places = ({ place }) => {
  const { name, picture, price, discount } = place;
  return (
    <div className="container">
      {/* <Link className="links" to={`/detail/${id}`}> */}
      <Grid container className="placeContainer">
        <img src={picture} alt="places" className="image" />
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
              {price}
            </Typography>
            <Typography variant="body2" style={{ color: "#717171" }}>
              {price}
            </Typography>
            <Typography variant="body2">
              <p>
                <b>{price}</b> {price}
              </p>
            </Typography>
          </Grid>
          <Typography variant="subtitle1" style={{ fontSize: "12px" }}>
            {<StarRateIcon style={{ height: "15px" }} />}
            {price}
          </Typography>
        </Grid>
      </Grid>
      {/* </Link> */}
    </div>
  );
};

export default Places;
