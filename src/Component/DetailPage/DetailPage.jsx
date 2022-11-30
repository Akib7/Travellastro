import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { PictureContainer } from "..";
import StarRateIcon from "@mui/icons-material/StarRate";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PLACE_LIST from "../PlaceList/placeList.data";
import { Link } from "react-router-dom";

import "./DetailPage.styles.scss";

const DetailPage = ({ name, rating, swiperImages }) => {
  console.log(swiperImages[0].id);

  return (
    <div className="detailPage">
      <Grid container className="detail">
        <Typography variant="h5">{name}</Typography>
      </Grid>
      <Grid item className="rating-and-btns">
        <Grid item className="rating-details">
          <Typography
            className="rating"
            variant="subtitle1"
            style={{ fontSize: "14px", paddingRight: "10px" }}
          >
            {<StarRateIcon style={{ height: "16px" }} />}
            {rating}
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

      <Grid container className="detail-image">
        <Grid item className="feature-image">
          <img
            src={swiperImages[0].image}
            alt={swiperImages[0].alt}
            className="image"
          />
        </Grid>
        <Grid container className="four">
          <Grid item className="pictures">
            {swiperImages.map(({ id, ...otherProps }) =>
              id > 1 && id < 6 ? (
                <PictureContainer key={id} {...otherProps} />
              ) : (
                ""
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default DetailPage;
