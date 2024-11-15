import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Korzinka } from "../../assets/icon/korzinka";
import { Link } from "react-router-dom";

export const ProductCard = (item) => {
  return (
    <Stack width={"241px"}>
      <Box sx={{ textAlign: "center" }}>
        <img style={{ width: "165px" }} src={item.img} alt="img" />
      </Box>
      <Stack>
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
        <Stack mt={"24px"} direction={"row"} justifyContent={"space-between"}>
          <Typography fontWeight={600} fontSize={"18px"} color="#333">
            {item.price} Сум
          </Typography>

          <Button variant="contained">
            <Korzinka />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
