import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";

import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ActionItem from "./ActionItem";
import Offers from "./Offers";
import TableItems from "./TableItems";

function ProductDetail() {
  const dispatch = useDispatch();
  const rating = Math.floor(35 + Math.random() * 15) / 10;

  let { id } = useParams();

  let { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);

  // console.log(product);
  return (
    <>
      {/* {loading && <Loader />} */}
      {!loading && product && Object.keys(product).length && (
        <Box className="m-10 flex flex-col xl:mx-12 xl:flex-row">
          <Box className="w-full xl:w-[40%]">
            <ActionItem product={product} />
          </Box>
          <Box className="mx-0 flex w-full flex-col xl:mx-10 xl:my-2 xl:max-w-[70%]">
            <Typography className="text-xl">
              {product.title.longTitle}
            </Typography>
            <Box className="my-2 flex flex-row items-center space-x-3">
              <Typography className="flex items-center justify-center rounded-[4px] bg-[#388e3c] px-1 text-xs text-white">
                {rating} <StarIcon className="text-xs" />
              </Typography>
              <Typography className="flex items-center justify-center rounded-[4px] px-1 text-sm font-medium text-[#878787]">
                {rating * 30} ratings & {rating * 10} reviews{" "}
              </Typography>
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="Flipkart Assured"
                className="w-16 xl:w-20"
              />
            </Box>
            <Typography className="text-sm font-medium text-[#388e3c]">
              Extra ₹{Math.floor((product.price.mrp - product.price.cost) / 3)}{" "}
              off
            </Typography>
            <Box className="my-2 flex flex-row items-center space-x-2">
              <Typography className="text-2xl font-medium ">
                ₹{product.price.cost}
              </Typography>
              <Typography className="text-sm text-[#878787]">
                <strike>₹{product.price.mrp}</strike>
              </Typography>
              <Typography className="text-sm font-medium text-[#388e3c]">
                ₹{product.price.discount} off
              </Typography>
            </Box>
            <Offers />
            <TableItems rating={rating} product={product} />
          </Box>
        </Box>
      )}
    </>
  );
}

export default ProductDetail;
