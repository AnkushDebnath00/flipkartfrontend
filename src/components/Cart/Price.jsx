import React, { useState, useEffect } from "react";

import { Box, Button, Typography, Divider } from "@mui/material";
import VerifiedUserSharpIcon from "@mui/icons-material/VerifiedUserSharp";

function Price({ cartItems }) {
  const [price, setPrice] = useState();
  const [discount, setDiscount] = useState();
  const [] = useState();
  const totalAmount = () => {
    let totprice = 0,
      totdiscount = 0;
    cartItems.map((item) => {
      totprice += item.price.mrp;
      totdiscount += item.price.mrp - item.price.cost;
    });
    setPrice(totprice);
    setDiscount(totdiscount);
  };
  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  return (
    <Box>
      <Box className="my-10 shadow-lg xl:my-0 xl:mx-2">
        <Box className="m-0 bg-white px-3 pt-5 pb-2  md:px-12">
          <Typography className="border-b-[2px] border-[#f0f0f0] text-base font-semibold text-[#878787]">
            PRICE DETAILS
          </Typography>
          <Box className="my-4 flex flex-col space-y-4 p-2">
            <Typography className="text-sm font-medium text-[#212121]/80">
              Price ({cartItems.length} items){" "}
              <span className="float-right">₹{price}</span>
            </Typography>
            <Typography className="text-sm font-medium text-[#212121]/80">
              Discount{" "}
              <span className="float-right text-[#388e3c]">- ₹{discount}</span>
            </Typography>
            <Typography className="text-sm font-medium text-[#212121]/80">
              GST{" "}
              <span className="float-right text-[#d31b1b]">
                + ₹{((price - discount) * 12) / 100}
              </span>
            </Typography>
            <Typography className="text-sm font-medium text-[#212121]/80">
              Delivery Charges{" "}
              <span className="float-right text-[#388e3c]">FREE</span>
            </Typography>
          </Box>
          <Box className="m-0 mt-3 border-t-[1px] border-b-[1px] border-dotted bg-white px-3 py-5 md:px-12">
            <Typography className="text-base font-semibold text-[#212121]/80">
              Total Price{" "}
              <span className="float-right ">
                ₹{price - discount + ((price - discount) * 12) / 100}
              </span>
            </Typography>
          </Box>
          <Box className="m-0 bg-white px-3 py-2 md:px-12">
            <Typography className="text-sm font-medium text-[#388e3c]">
              You'll save ₹
              {price -
                Math.floor(
                  price - discount + ((price - discount) * 12) / 100
                )}{" "}
              on this order
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography className="m-auto mx-5 my-5 flex items-center justify-center text-xs text-[#666666]">
        <VerifiedUserSharpIcon className="mr-2 text-[#666666]" /> Safe and
        Secure Payments.Easy returns.100% Authentic products.
      </Typography>
    </Box>
  );
}

export default Price;
