import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import PLACE_LIST from "../PlaceList/placeList.data";
import SWIPER_DATA from "./swiper.data";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

const SwiperData = ({ id, swiperImages }) => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {swiperImages.map(({ image, alt }) => (
          <SwiperSlide>{<img key={id} src={image} alt={alt} />}</SwiperSlide>
        ))}

        {/* {PLACE_LIST.map((el) =>
          el.swiperImages.map(({ image, alt }) => (
            <SwiperSlide>{<img src={image} alt={alt} />}</SwiperSlide>
          ))
        )} */}

        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default SwiperData;
