import React from "react";
import { Grid } from "@mui/material";
import PLACE_LIST from "./placeList.data";
import { Places } from "..";

import "./PlaceList.styles.scss";

const PlaceList = () => {
  return (
    <Grid container className="place-container">
      {PLACE_LIST.map((place) => (
        <Places key={place._id} place={place} />
      ))}
    </Grid>
  );
};

export default PlaceList;
