import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";

import "./DetailPage.styles.scss";

const DetailPage = () => {
  return (
    <div className="detailPage">
      <Grid container className="detail">
        <Typography variant="h5">
          Aura House 2bds Eco Bamboo House, Pool, River View
        </Typography>
      </Grid>
      <Grid item className="rating-and-btns">
        <Grid item className="rating-details">
          <Typography
            className="rating"
            variant="subtitle1"
            style={{ fontSize: "14px", paddingRight: "10px" }}
          >
            {<StarRateIcon style={{ height: "16px" }} />}
            5.0
          </Typography>
          <Link to={"/"} className="link">
            3 Reviews
          </Link>
          <Typography
            className="rating"
            variant="subtitle1"
            style={{ fontSize: "14px", padding: "0px 16px" }}
          >
            {<StarRateIcon style={{ height: "16px" }} />}
            Superhost
          </Typography>
          <Link to={"/"} className="link">
            Cape Town
          </Link>
          ,
          <Link to={"/"} className="link">
            Western Cape
          </Link>
          ,
          <Link to={"/"} className="link">
            South Africa
          </Link>
          ,
        </Grid>
        <Grid item>
          <Link to={"/"} className="link">
            <Button
              variant="secondary"
              style={{
                borderRadius: "10px",
              }}
            >
              {
                <Typography
                  className="jk"
                  variant="body1"
                  style={{ fontSize: "12px" }}
                >
                  {<IosShareIcon style={{ height: "16px" }} />}
                  Share
                </Typography>
              }
            </Button>
          </Link>
          <Link to={"/"} className="link">
            <Button
              variant="secondary"
              style={{
                borderRadius: "10px",
              }}
            >
              {
                <Typography
                  className="jk"
                  variant="body1"
                  style={{ fontSize: "12px" }}
                >
                  {<FavoriteBorderIcon style={{ height: "16px" }} />}
                  Save
                </Typography>
              }
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailPage;
