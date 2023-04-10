import React, { useState, useContext } from "react";
// components
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu } from "@mui/icons-material";

function MobileButtons() {
  return (
    <Box className="flex flex-col items-end space-y-4">
      <Typography className="md:mx-2 xl:mx-5">Become a Seller</Typography>
      <Box className="flex flex-row space-x-1">
        <Menu />
        <Typography className="md:mx-2 xl:mx-5">More</Typography>
      </Box>
      <Box className="ml-5 flex flex-row items-center">
        <ShoppingCartIcon className="h-5 " />

        <Box component="span" className="font-bold">
          Cart
        </Box>
      </Box>
    </Box>
  );
}

export default MobileButtons;
