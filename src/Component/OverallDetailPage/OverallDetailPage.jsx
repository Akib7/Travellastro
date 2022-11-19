import React from "react";
import { Grid } from "@mui/material";
import PLACE_LIST from "../PlaceList/placeList.data";
// import "./OverallDetailPage.styles.scss";
import { DetailPage } from "..";

const OverallDetailPage = () => {
  return (
    <div className="contents">{<DetailPage name={PLACE_LIST[0].name} />}</div>
  );
};

export default OverallDetailPage;
