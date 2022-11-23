import React from "react";
import { Grid } from "@mui/material";
import PLACE_LIST from "../PlaceList/placeList.data";
// import "./OverallDetailPage.styles.scss";
import { DetailPage } from "..";

const OverallDetailPage = () => {
  const pathName = window.location.pathname;
  const id = parseInt(pathName.slice(8, 9));
  console.log(id === PLACE_LIST[0].id);
  console.log(pathName);
  console.log(id);
  const name = PLACE_LIST.map((name) => console.log(name.name));
  return (
    <div className="contents">{<DetailPage name={PLACE_LIST[0].name} />}</div>
  );
};

export default OverallDetailPage;
