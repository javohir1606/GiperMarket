import { Box, Stack } from "@mui/system";
import { Container } from "@mui/material";
import React from "react";

export const AksiyaCrad = ({ img }) => {
  return (
    <Container maxWidth="1550px">
      <Stack justifyContent={"center"} mb={"40px"} textAlign={"center"} alignItems={"center"}>
        <img width={"340px"} height={"230px"} src={img} alt="" />
      </Stack>
    </Container>
  );
};
