import React from "react";
import { Grid, Typography } from "@mui/material";
import PLACE_LIST from "./placeList.data";
import { Places, Location } from "..";

import "./PlaceList.styles.scss";

const PlaceList = () => {
  // const id = parseInt(PLACE_LIST[0]._id);
  // console.log(id);

  return (
    <div className="content">
      <Grid>
        <Location />
      </Grid>
      <Grid item className="deals">
        <Typography
          variant="h3"
          style={{
            padding: "10px 0px 0px 80px",
            width: "30%",
          }}
        >
          We picked some cool things for you!
        </Typography>
        <Grid container className="place-container">
          {/* {PLACE_LIST.filter((_, idx) => {
            const { id } = PLACE_LIST.map((m) => parseInt(m._id));
            id < 4;
          }).map((place) => (
            <Places key={place._id} item={place} />
          ))} */}

          {PLACE_LIST.map((place, idx) =>
            idx < 7 ? <Places key={place._id} place={place} /> : ""
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default PlaceList;
