import { useState } from "react";
import { Box, Typography, MenuItem, Menu } from "@mui/material";
import React from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

function Profile({ account, setAccount }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = () => {
    setAccount("");
  };
  return (
    <>
      <Box className="mr-5">
        <Typography onClick={handleClick} className="cursor-pointer">
          {account.replace("@gmail.com", "")}
        </Typography>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box></Box>
        <Box>
          <MenuItem
            onClick={() => {
              handleClose();
              logout();
            }}
            className="w-[150px] rounded-none py-1 text-sm font-bold text-[#2874f0]"
          >
            <PowerSettingsNewIcon className="text-md mr-2 text-black" />
            Logout
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
}

export default Profile;
