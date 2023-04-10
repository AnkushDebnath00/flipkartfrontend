import React from "react";

import { Box } from "@mui/material";
import { imageURL } from "../../constants/data";
import Carousel from "react-multi-carousel";

function AdBanner() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      ssr={true}
      // infinite={true}
      keyBoardControl={true}
      responsive={responsive}
      className="mx-auto mt-2 w-[99%]"
    >
      {imageURL?.map((image) => {
        return (
          <img
            key={image}
            src={image}
            alt="Advertisement"
            className="h-auto w-full object-cover"
          />
        );
      })}
    </Carousel>
  );
}

export default AdBanner;
