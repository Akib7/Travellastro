import { Button, Grid } from "@mui/material";
import React from "react";
import PLACE_LIST from "./placeList.data";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./ShowAllPicture.styles.scss";

const ShowAllPicture = () => {
  return (
    <div>
      <Button className="back-btn">
        <ArrowBackIosIcon />
      </Button>

      <Grid container className="image-container">
        <Grid item className="images">
          {PLACE_LIST.map((swiper) =>
            swiper.swiperImages.map((image) => (
              <div>
                <img src={image.image} alt={image.alt} />
              </div>
            ))
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default ShowAllPicture;
