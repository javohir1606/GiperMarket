import { Button, Container, Grid2, Stack, Typography, Tooltip } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { useSingleCatalog } from "../../pages/Home/query/useSingilCatolog";
import { Korzinka } from "../../assets/icon/korzinka";

export const HomePage = () => {
  const { id } = useParams();
  const { data } = useSingleCatalog(id);
  console.log(data);

  return (
    <Container maxWidth="xs">
      <Stack direction={"row"}>
        <Grid2 container spacing={2}>
          {data?.map((item) => (
            <Grid2 xs={12} sm={6} md={3} key={item.id}>
              <Stack
                width={"240px"}
                height={"323px"}
                spacing={2}
                bgcolor={"#fff"}
                padding={"5px"}
                sx={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                }}
              >
                <Stack textAlign={"center"} justifyContent={"center"}>

                <img
                  src={item.img}
                  alt="img"
                  style={{
                    textAlign: "center",
                    width: "180px",
                    height: "165px",
                  }}
                />
                </Stack>
                <Tooltip title={item.title} arrow>
                  <Typography
                    width={"157px"}
                    fontWeight={"400"}
                    fontSize={"16px"}
                    color="#333"
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1, 
                      textOverflow: "ellipsis", 
                    }}
                  >
                    {item.title}
                  </Typography>
                </Tooltip>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  gap={"20px"}
                  justifyContent={"space-between"}
                >
                  <Typography fontWeight={"600"} fontSize={"18px"} color="#333">
                    {item.price} Сум
                  </Typography>
                  <Button sx={{ background: "#FEEE00" }}>
                    <Korzinka />
                  </Button>
                </Stack>
              </Stack>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </Container>
  );
};
