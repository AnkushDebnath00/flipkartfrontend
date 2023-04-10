import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// components
import {
  InputBase,
  IconButton,
  Box,
  Paper,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { getProducts } from "../../redux/actions/productActions";

function Search(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const [open, setOpen] = useState(true);
  const getText = (text) => {
    setText(text);
    setOpen(false);
  };

  let { products } = useSelector((state) => state.getProducts);
  useEffect(() => {
    dispatch(getProducts);
  }, [dispatch]);

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        width: `${props.mob ? "35vw" : "90vw"}`,
        minWidth: "200px",
        height: "36px",
      }}
      className="mx-3 rounded-sm "
    >
      <Box className="flex justify-between">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search for products, brands and more"
          inputProps={{ "aria-label": "Search for products, brands and more" }}
          className="text-xs"
          onChange={(e) => getText(e.target.value)}
          value={text}
        />
        <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
          <SearchIcon className="text-[#2874f0]" />
        </IconButton>
      </Box>
      {text && (
        <List className="bg-white p-0 shadow-2xl">
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => {
                  setOpen(true);
                  setText("");
                }}
                key={product.id}
              >
                <ListItem className="relative flex flex-row space-x-3 rounded-sm py-[17px] text-black hover:bg-[rgb(246,249,255)]">
                  <SearchIcon className=" text-gray-400" />
                  <Typography className="text-xs font-medium">
                    {product.title.longTitle}
                  </Typography>
                </ListItem>
              </Link>
            ))}
        </List>
      )}
    </Paper>
  );
}

export default Search;
