import React from "react";

import { Box, Typography } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

function Offers() {
  return (
    <Box className="mb-4 space-y-1">
      <Typography className="mb-1 font-medium">Available Offers</Typography>
      <Box className="flex space-x-1 opacity-90">
        <LocalOfferIcon className="pt-1 text-lg text-[#1aba4a]" />
        <Typography className="text-sm">
          <span className="font-semibold">Bank Offer</span> 10% off on Bank of
          Baroda Credit Card EMI Transactions, up to ₹2,000 on orders of ₹5,000
          and above
        </Typography>
      </Box>
      <Box className="flex space-x-1 opacity-90">
        <LocalOfferIcon className="pt-1 text-lg text-[#1aba4a]" />
        <Typography className="text-sm">
          <span className="font-semibold">Bank Offer</span> 10% off on DBS Bank
          Credit Card Transactions, up to ₹750. On orders of ₹2,000 and above
        </Typography>
      </Box>
      <Box className="flex space-x-1 opacity-90">
        <LocalOfferIcon className="pt-1 text-lg text-[#1aba4a]" />
        <Typography className="text-sm">
          <span className="font-semibold">Bank Offer</span> 10% off on IDFC
          FIRST Bank Credit Card EMI Transactions, up to ₹2,000 on orders of
          ₹5,000 and above
        </Typography>
      </Box>
      <Box className="flex space-x-1 opacity-90">
        <LocalOfferIcon className="pt-1 text-lg text-[#1aba4a]" />
        <Typography className="text-sm">
          Buy this Product and Get Extra ₹500 Off on Bikes & Scooters
        </Typography>
      </Box>
    </Box>
  );
}

export default Offers;
