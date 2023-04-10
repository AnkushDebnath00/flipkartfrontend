import React from "react";

import { Box } from "@mui/material";
import { adCovid } from "../../constants/data";

function AdCovid() {
  return (
    <Box className="mx-auto mt-2 flex w-[99%] justify-center overflow-hidden">
      <a href="https://www.giveindia.org/index" target="_blank">
        <img
          src={adCovid}
          alt="Advertisement"
          className="h-auto w-full min-w-[800px] object-cover"
        />
      </a>
    </Box>
  );
}

export default AdCovid;
