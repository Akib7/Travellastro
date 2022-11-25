import React from "react";
import { Typography, Grid, Divider } from "@mui/material";
import Places from "../Places/Places";
import PLACE_LIST from "../PlaceList/placeList.data";

const HotDeals = () => {
  return (
    <div className="hotDeals" style={{ borderBottom: "1px dotted black" }}>
      <Typography
        variant="body1"
        style={{
          fontWeight: "bold",
          padding: "40px",
          borderBottom: "1px dotted black",
        }}
      >
        Todays Hot-Deals
      </Typography>

      <Divider />

      <Grid container className="place-container">
        {PLACE_LIST.map((place, idx) =>
          idx > 5 && idx < 10 ? <Places key={place._id} place={place} /> : ""
        )}
      </Grid>
      <Typography
        variant="body1"
        style={{
          fontWeight: "bold",
          padding: "40px",
          borderBottom: "1px dotted black",
        }}
      >
        Your Searched Items
      </Typography>
      <Divider />

      <Grid container className="place-container">
        {PLACE_LIST.map((place, idx) =>
          idx > 10 && idx < 15 ? <Places key={place._id} place={place} /> : ""
        )}
      </Grid>
      <Typography
        variant="body1"
        style={{
          fontWeight: "bold",
          padding: "40px",
          borderBottom: "1px dotted black",
        }}
      >
        Deals on furniture
      </Typography>
      <Divider />

      <Grid container className="place-container">
        {PLACE_LIST.map((place, idx) =>
          idx > 10 && idx < 15 ? <Places key={place._id} place={place} /> : ""
        )}
      </Grid>
      <div style={{ display: "flex", justifyContent: "space-around" }}></div>
      <Typography
        variant="body1"
        style={{
          fontWeight: "bold",
          padding: "40px",
          borderBottom: "1px dotted black",
        }}
      >
        Review Your Purchase
      </Typography>
      <Divider />

      <Grid container className="place-container">
        {PLACE_LIST.map((place, idx) =>
          idx > 4 && idx < 7 ? <Places key={place._id} place={place} /> : ""
        )}
      </Grid>
    </div>
  );
};

export default HotDeals;
