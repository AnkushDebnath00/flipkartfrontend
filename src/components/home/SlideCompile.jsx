import React from "react";

import Slide from "./Slide";
import SlideOld from "./SlideOld";
import Advertisement from "./Advertisement";
import AdBanner from "./AdBanner";
import AdCovid from "./AdCovid";
import { Box } from "@mui/material";

function SlideCompile({ products }) {
  return (
    <>
      <Box className="flex flex-row">
        <Box className="flex w-[70%] flex-row md:w-[75%] xl:w-[83%]">
          <SlideOld
            idd={"top"}
            heading={"Deals of the Day"}
            products={products}
            timer={true}
            sub={null}
          />
        </Box>
        <Advertisement />
      </Box>
      <Slide
        idd={"electronics"}
        heading={"Best of Electronics"}
        products={products}
        bgurl={
          'bg-[url("https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90")]'
        }
      />
      <Slide
        idd={"beauty"}
        heading={"Beauty, Food, Toys & more"}
        products={products}
        bgurl={
          'bg-[url("https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90")]'
        }
      />
      <AdCovid />
      <SlideOld
        idd={"travel"}
        heading={"Suggested for You"}
        products={products}
        timer={false}
        sub={"Similar to Items You Viewed"}
      />
      <Slide
        idd={"home"}
        heading={"Home & Kitchen Essentials"}
        products={products}
        bgurl={
          'bg-[url("https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90")]'
        }
      />
      <AdBanner />
      <Slide
        idd={"bike"}
        heading={"Sports, Healthcare & more"}
        products={products}
        bgurl={
          'bg-[url("https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90")]'
        }
      />
      <SlideOld
        heading={"You May Like..."}
        products={products}
        timer={false}
        sub={"Similar to Items You Viewed"}
      />
      <Slide
        idd={"fashion"}
        heading={"Fashion Top Deals"}
        products={products}
        bgurl={
          'bg-[url("https://rukminim1.flixcart.com/fk-p-flap/278/278/image/31d46a8fd93eeedd.jpg?q=90")]'
        }
      />
      <SlideOld
        heading={"More to Explore"}
        products={products}
        timer={false}
        sub={"Inspired by Your Interest"}
      />
    </>
  );
}

export default SlideCompile;
