import React from "react";
import { useDispatch } from "react-redux";

import { Card, Box, Typography, Button, Divider } from "@mui/material";
import GroupButton from "./GroupButton";
import { addEllipsis } from "../../utils/common-utils";
import { removeFromCart } from "../../redux/actions/cartActions";

function CartItem({ item }) {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Card className="m-0 bg-white px-2 pb-0 pt-5 md:px-10">
      <Box className="flex flex-row py-5 px-2">
        <img src={item.url} className="h-[110px]" alt="item" />
        <Box>
          <Typography className="mx-3 mt-3 mb-1 text-sm font-medium ">
            {addEllipsis(item.title.longTitle)}
          </Typography>
          <Typography className="mx-3 flex text-xs text-[#87898b]">
            {item.tagline}
          </Typography>
          <Typography className="mx-3 flex text-xs text-[#87898b]">
            Seller: RetailNet
            <img
              src={fassured}
              style={{ width: 50, marginLeft: 10 }}
              alt="item"
              className=" object-scale-down"
            />
          </Typography>
          <Box className="ml-3 mr-1 mt-3 flex items-center space-x-3">
            <Typography className="text-xs text-[#87898b]">
              <strike>₹{item.price.mrp}</strike>
            </Typography>
            <Typography className="text-lg font-medium">
              ₹{item.price.cost}
            </Typography>
            <Typography className="text-sm font-medium text-[#388e3c]">
              {item.price.discount} off
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <GroupButton />
        <Button
          className="mx-2 px-3 text-black hover:text-[#2874f0]"
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove
        </Button>
      </Box>
      <Divider className="py-3" />
    </Card>
  );
}

export default CartItem;
