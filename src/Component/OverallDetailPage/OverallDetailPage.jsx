import React from "react";
import { Grid } from "@mui/material";
import PLACE_LIST from "../PlaceList/placeList.data";
// import "./OverallDetailPage.styles.scss";
import { DetailPage } from "..";

const OverallDetailPage = () => {
  const pathName = window.location.pathname;
  const id = parseInt(pathName.slice(8, 9));
  // console.log(pathName);
  // console.log(id);
  return (
    <div className="contents">
      {
        <DetailPage
          name={PLACE_LIST[id - 1].name}
          rating={PLACE_LIST[id - 1].rating}
          swiperImages={PLACE_LIST[id - 1].swiperImages}
        />
      }
    </div>
  );
};

export default OverallDetailPage;
