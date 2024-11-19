import { Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Catalog = (item) => {
  return (
    <Stack direction={"row"} width={"241px"} bgcolor={"#f6f6f6"}>
      <Link to={`/homepage/${item.name}`} style={{ textDecoration: "none" }}>
        <Stack
          alignItems={"center"}
          direction={"row"}
          gap={"16px"}
          px={"16px"}
          py={"14px"}
        >
          <img style={{ width: "96px" }} src={item.img} alt="img" />
          <Typography fontWeight={"500"} fontSize={"16px"} color="#333">
            {item.name}
          </Typography>
        </Stack>
      </Link>
    </Stack>
  );
};
