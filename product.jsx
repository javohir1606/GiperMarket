import React, { useState } from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
// import { Korzinka } from "../../assets/icon/korzinka";
import { Link } from "react-router-dom";
// import { LikeIcon } from "../../assets/icon/likeIcon";
import { Korzinka } from "./src/assets/icon/korzinka";
import { LikeIcon } from "./src/assets/icon/likeIcon";

export const Product = (item) => {
  const [cartItems, setCartItems] = useState([]); 

  const handleAddToCart = () => {
    setCartItems((prevItems) => [...prevItems, item]); 
    console.log(`${item.title} korzinkaga qo'shildi!`);
  };

  return (
    <Stack
      width={"241px"}
      height={"323px"}
      gap={"15px"}
      alignItems={"center"}
      padding={"10px"}
    >
      <Box sx={{ textAlign: "center" }}>
        <img style={{ width: "165px" }} src={item.img} alt="img" />
      </Box>
      <Stack position={"relative"}>
        <Link to={`/detail/${item.id}`} style={{ textDecoration: "none" }}>
          <Typography
            fontWeight={400}
            fontSize={"16px"}
            lineHeight={"150%"}
            color="#333"
          >
            {item.title}
          </Typography>
        </Link>
        <Typography
          mt={"6px"}
          fontWeight={400}
          fontSize={"16px"}
          lineHeight={"150%"}
          color="#333"
        >
          {item.rame}
        </Typography>
        <Stack
          mt={"24px"}
          gap={"15px"}
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Typography fontWeight={600} fontSize={"18px"} color="#333">
            {item.price} Сум
          </Typography>

          <Button variant="contained" onClick={handleAddToCart}>
            <Korzinka />
          </Button>
          <Stack position={"absolute"} top={"-180px"} right={"-15px"}>
            <IconButton>
              <LikeIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
