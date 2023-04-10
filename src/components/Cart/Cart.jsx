import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { removeFromCart, addToCart } from "../../redux/actions/cartActions";
import CartItem from "./CartItem";
import Price from "./Price";
import EmptyCart from "./EmptyCart";

import { Box, Button, Grid, Typography } from "@mui/material";

function Cart() {
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
  // const buyNow = async () => {
  //   let response = await payUsingPaytm({
  //     amount: 500,
  //     email: "kunaltyagi@gmail.com",
  //   });
  //   var information = {
  //     action: "https://securegw-stage.paytm.in/order/process",
  //     params: response,
  //   };
  //   post(information);
  // };

  return (
    <>
      <Box className=" min-h-[100vh] min-w-full overflow-hidden bg-[#f1f3f6]">
        <Box className="mx-3 my-4 md:mx-10 xl:mx-24">
          {cartItems.length ? (
            <Grid container>
              <Grid item lg={8} md={8} sm={12} xs={12} className="shadow-lg">
                <Box>
                  <Typography className="m-0 border-b-[2px] border-[#f0f0f0] bg-white px-3 pt-5 pb-2 text-lg font-semibold text-gray-700 md:px-12">
                    My Cart({cartItems.length})
                  </Typography>
                </Box>
                {cartItems.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
                <Box className="m-0 flex justify-end bg-white px-3 py-5 md:px-12">
                  <Button className="rounded-sm bg-[#fb641b] px-12 py-3 text-white md:px-16">
                    Place Order
                  </Button>
                </Box>
              </Grid>
              <Grid item lg={4} md={4} sm={12} xs={12}>
                <Price cartItems={cartItems} />
              </Grid>
            </Grid>
          ) : (
            <Box>
              <EmptyCart />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Cart;
