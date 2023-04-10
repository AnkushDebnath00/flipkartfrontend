import React from "react";
import { Link } from "react-router-dom";

import { Box, Typography, Button } from "@mui/material";

function EmptyCart() {
  return (
    <Box>
      <Box className="flex flex-col items-center justify-center rounded-sm bg-white shadow-md">
        <img
          src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="EmptyCart"
          className="my-8 w-[250px] max-w-[60%]"
        />
        <Typography> Your cart is Empty!</Typography>
        <Typography className="mb-5 p-1 text-[10.5px]">
          Add items to it now.
        </Typography>
        <Link to="/" className="mb-10">
          <Button className="rounded-sm bg-[#2874f0] px-16 py-3 text-xs font-normal text-white shadow-md">
            Shop Now
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default EmptyCart;
