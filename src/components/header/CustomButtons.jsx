import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import {
  Box,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu } from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { DataContext } from "../../context/DataProvider";
import LoginBox from "../login/LoginBox";
import Profile from "./Profile";
import MobileButtons from "./MobileButtons";

function CustomButtons() {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  // const [drawer, setDrawer] = useState(false);

  // const handleOpen = () => {
  //   setDrawer(true);
  // };
  // const handleClose = () => {
  //   setDrawer(false);
  // };

  // const list = () => (
  //   <Box>
  //     <List>
  //       <ListItem button>
  //         <MobileButtons />
  //       </ListItem>
  //     </List>
  //   </Box>
  // );

  return (
    <Box className="flex flex-row items-center">
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          variant="contained"
          className="mx-5 rounded-sm bg-white px-6 text-[#2874f0] md:px-10"
          onClick={() => setOpen(true)}
        >
          Login
        </Button>
      )}
      <Typography className=" mobInvisible md:mx-2 xl:mx-5">
        Become a Seller
      </Typography>
      <Typography className=" mobInvisible ml-5 md:mx-2 xl:mx-5">
        More
      </Typography>
      <a href="https://goo.gl/kY1meC" className="mobVisible">
        <AddBoxIcon />
      </a>
      <Box className="ml-5 flex flex-row items-center">
        <Link to={"/cart"} className="flex items-center">
          <Badge badgeContent={cartItems?.length} color="success">
            <ShoppingCartIcon className="h-5 " />
          </Badge>

          <Box component="span" className="mobInvisible font-medium">
            Cart
          </Box>
        </Link>

        {/* <IconButton
          color="inherit"
          className="ml-5 md:hidden"
          onClick={handleOpen}
        >
          <Menu />
        </IconButton>
        <Drawer anchor="right" open={drawer} onClose={handleClose}>
          {list()}
        </Drawer> */}
      </Box>
      <LoginBox open={open} setOpen={setOpen} setAccount={setAccount} />
    </Box>
  );
}

export default CustomButtons;
