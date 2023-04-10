import React from "react";

// data
import { navData } from "../../constants/data";

// components
import { Box, Typography } from "@mui/material";

function Navbar() {
  return (
    <Box className=" mx-auto mt-4 w-full items-center space-x-4 overflow-x-scroll bg-white pb-4 shadow-xl xl:overflow-x-hidden">
      <Box className="flex flex-row justify-start md:justify-evenly xl:px-[40px]">
        {navData?.map((data) => {
          return (
            <a
              key={data.text}
              href={data.link ? data.link : "#"}
              className="mx-3 flex flex-shrink-0 flex-col justify-center"
            >
              <img
                src={`${data.url}`}
                alt="navImage"
                className=" max-w-20 contain mx-auto block max-h-20 w-[64px]"
              />
              <Typography className="text-center text-[13px] font-medium">
                {data.text}
              </Typography>
            </a>
          );
        })}
      </Box>
    </Box>
  );
}

export default Navbar;
