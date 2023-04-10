import React from "react";

import StarIcon from "@mui/icons-material/Star";
import CircleIcon from "@mui/icons-material/Circle";
import { superCoinUrl } from "../../constants/data";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

function TableItems({ rating, product }) {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <Table>
      <TableBody>
        <TableRow className="mt-10 align-baseline">
          <TableCell className="items-start border-none font-medium text-[#878787]">
            Delivery
          </TableCell>
          <TableCell className="border-none font-medium text-[#1ABA17]">
            <Box>
              Delivery by {date.toDateString()}{" "}
              <span className="text-[#878787]">| </span>Free{" "}
              <strike className="text-[#878787]">₹40</strike>
            </Box>
            <Typography className="text-xs font-normal">
              if ordered before 10:10 PM
            </Typography>
          </TableCell>
        </TableRow>
        <TableRow className="mt-10 align-baseline">
          <TableCell className="items-start border-none font-medium text-[#878787]">
            Warrenty
          </TableCell>
          <TableCell className="border-none">No Warrenty available</TableCell>
        </TableRow>
        <TableRow className="mt-10 align-baseline">
          <TableCell className="items-start border-none font-medium text-[#878787]">
            Seller
          </TableCell>
          <TableCell className="space-y-3 border-none">
            <Box className="flex flex-row items-center space-x-2 font-semibold text-[#2874f0]">
              <span>IndiFlashMart </span>
              <span className="flex h-5 w-10 items-center justify-center rounded-full bg-[#2874f0] px-1 text-xs text-white">
                {Math.floor(rating) + 0.2} <StarIcon className="text-xs" />
              </span>
            </Box>
            <ul type="disc" className="space-y-2">
              <li>
                <CircleIcon className="mr-2 text-[8px] text-[#b7b7b7]" />7 day
                seller replacement policy/brand assistance for device issues*
              </li>
              <li>
                <CircleIcon className="mr-2 text-[8px] text-[#b7b7b7]" />
                GST invoice available
              </li>
            </ul>
          </TableCell>
        </TableRow>
        <TableRow className="mt-10 align-baseline">
          <TableCell colSpan={2} className="border-none">
            <img src={superCoinUrl} alt="supercoin" className="h-20" />
          </TableCell>
        </TableRow>
        <TableRow className="mt-10 align-baseline">
          <TableCell className="items-start border-none font-medium text-[#878787]">
            Description
          </TableCell>
          <TableCell className="border-none">
            <Typography className="text-sm">{product.description}</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableItems;
