import React from "react";
// data
import { logoUrl, subUrl } from "../../constants/data";
// components
import { Link } from "react-router-dom";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="sticky"
      className="flex h-[112px] flex-col items-center justify-center bg-[#2874f0] md:h-[56px]"
    >
      <Toolbar className="h-[56px] w-[100%] justify-between md:justify-center">
        <Box className="flex flex-row items-center justify-center">
          <Box className="flex flex-col xl:mx-5">
            <Link to="/">
              <img
                src={logoUrl}
                alt="Flipkart"
                className="w-[75px] min-w-[75px]"
              />
              <Box className="flex flex-row">
                <Typography className="block text-[.7rem] italic text-white md:text-[#ffe500]">
                  Explore{" "}
                  <Typography
                    component="span"
                    className="text-[.7rem] font-semibold italic text-[#ffe500] md:text-[#ffe500]"
                  >
                    Plus
                  </Typography>
                </Typography>
                <img src={subUrl} alt="plus" className="h-2" />
              </Box>
            </Link>
          </Box>
        </Box>
        <Box className="hidden md:flex">
          <Search mob={true} />
        </Box>
        <Box>
          <CustomButtons />
        </Box>
      </Toolbar>
      <Toolbar className="flex md:hidden">
        <Search mob={false} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
