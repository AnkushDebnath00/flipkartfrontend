import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";

// components
import Navbar from "./Navbar";
import Banner from "./Banner";
import SlideCompile from "./SlideCompile";
import { Box } from "@mui/material";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  //   const getProducts = useSelector((state) => state.getProducts);
  //   const { products } = getProducts;
  const { products } = useSelector((state) => state.getProducts);
  // console.log(products);

  return (
    <Box className="bg-[#f1f3f6]">
      <Navbar />
      <Banner />
      <SlideCompile products={products} />
    </Box>
  );
}

export default Home;
