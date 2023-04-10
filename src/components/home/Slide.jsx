import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, IconButton, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
// import Arrow from "./Arrow";

function Slide({ heading, products, bgurl, idd }) {
  //   const CustomLeftArrow = ({ onClick }) => {
  //     return (
  //       <IconButton
  //         style={{ pointer: "cursor", htmlColor: "red" }}
  //         onClick={onClick}
  //       >
  //         <Arrow />
  //       </IconButton>
  //     );
  //   };

  //   const CustomRightArrow = ({ onClick }) => {
  //     return (
  //       <IconButton
  //         style={{
  //           pointer: "cursor",
  //           htmlColor: "red",
  //         }}
  //         onClick={onClick}
  //       >
  //         <Arrow />
  //       </IconButton>
  //     );
  //   };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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
    <Box
      id={`${idd}`}
      className="mx-auto mt-2 flex h-[270px] w-[99%] flex-row md:h-[370px]"
    >
      {/* <Box
        className="h-10 max-w-[25%] bg-[url('https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90')] bg-cover bg-bottom bg-no-repeat
"
      > */}
      <Box
        className={`mt-2 flex w-[30%] flex-col items-center justify-center bg-white ${bgurl} bg-contain bg-bottom bg-no-repeat pt-3 text-[1.25rem] font-normal shadow-xl md:w-[20%] xl:w-[15%] xl:text-[1.6rem]`}
      >
        <h3 className="mb-4 text-center">{heading}</h3>
        <Button
          variant="contained"
          className="rounded-sm bg-[#2874f0] text-xs font-normal md:text-sm	"
        >
          View All
        </Button>
      </Box>
      {/* </Box> */}
      <Carousel
        // customLeftArrow={<CustomLeftArrow />}
        // customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        swipeable={true}
        draggable={false}
        showDots={false}
        ssr={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        className="mt-2 w-[75%] bg-white shadow-xl md:w-[80%] xl:w-[85%]"
        centerMode={true}
      >
        {products?.map((data) => {
          return (
            <Link key={data.id} to={`/product/${data.id}`}>
              <Box
                key={data.id}
                className="flex w-full cursor-pointer flex-col items-center justify-between p-[15px]"
              >
                <img
                  src={data.url}
                  alt="bannerImage"
                  className="contain h-[110px] w-auto transition-all hover:scale-105 md:h-[180px]"
                />
                <Box className="flex w-full flex-col items-center justify-end">
                  <Typography className="mt-3 text-center text-sm md:mt-6">
                    {data.title.shortTitle}
                  </Typography>
                  <Typography className="mt-2 text-center text-xs font-light text-[#388e3c] ">
                    {data.discount}
                  </Typography>
                  <Typography className="mobInvisible mt-2 text-center text-xs text-[#212121] opacity-[.6]">
                    {data.tagline}
                  </Typography>
                </Box>
              </Box>
            </Link>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default Slide;
