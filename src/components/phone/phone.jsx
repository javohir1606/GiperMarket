import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export const PhoneCard = ({ img, title, rame, price }) => {
  return (
    <Stack direction={"row"} gap={"13px"}>
      <img width={"140px"} height={"140px"} src={img} alt="" />
      <Stack>
        <Stack mb={"49px"}>
          <Typography width={"249px"}>{title}</Typography>
          <Typography>{rame}</Typography>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
          <Typography fontWeight={"500"} fontSize={"18px"} color="#000">
            {price} Сум
          </Typography>
          <Typography
            fontWeight="400"
            fontSize="14px"
            color="#999"
            sx={{ textDecoration: "line-through" }}
          >
            6 190 000 Сум
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
