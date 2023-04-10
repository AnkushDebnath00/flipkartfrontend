import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../redux/actions/cartActions";
import { Box, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { payUsingPaytm } from "../../sevice/api";
import { post } from "../../utils/paytm";

function ActionItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { id } = product;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "ankushdebnath00@gmail.com",
    });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <Box className=" mx-auto mb-10  w-[500px] max-w-[100%] xl:mb-0 xl:max-w-[45vw] ">
      <Box className="flex items-center justify-center border-2 border-gray-200 p-12">
        <img src={product.detailUrl} alt="productImg" />
      </Box>
      <Box className="my-4 flex items-center justify-between">
        <Button
          variant="contained"
          className="h-[47px] w-[250px] max-w-[46%] rounded-sm bg-[#ff9f00] text-xs xl:h-[55px] xl:text-sm"
          onClick={() => addItemToCart()}
        >
          <ShoppingCartIcon className="mr-2" />
          Add to Cart
        </Button>
        <Button
          variant="contained"
          className="h-[47px] w-[250px] max-w-[46%] rounded-sm bg-[#fb641b] text-xs xl:h-[55px] xl:text-sm"
          onClick={() => buyNow()}
        >
          <FlashOnIcon className="mr-2" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default ActionItem;
