import React, { useState } from "react";
import { useParams } from "react-router";
import { useGetSinglePhone } from "../../pages/Home/query/useGetSinglePhone";
import {
  Box,
  Button,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { LikeIcon } from "../../assets/icon/likeIcon";

export const ProductDetails = () => {
  const { id } = useParams();
  const { data } = useGetSinglePhone(parseInt(id));

  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    setInCart(true);
  };

  const handleRemoveFromCart = () => {
    setInCart(false);
    setQuantity(1);  // Reset quantity to 1 when removing the item
  };

  return (
    <>
      {data && (
        <Container>
          <Stack mb={"19px"}>
            <h1>{data.title}</h1>
            <Stack direction={"row"} alignItems={"center"} gap={"50px"}>
              <Stack direction={"row"} alignItems={"center"} gap={"12px"}>
                <Rating name="read-only" value={5} readOnly></Rating>
                <Typography fontWeight={"400"} fontSize={"16px"} color="#76bc21">
                  (0)
                </Typography>
              </Stack>
              <Stack direction={"row"} gap={"12px"}>
                <LikeIcon />
                <Typography fontWeight={"400"} fontSize={"16px"} color="#333">
                  В избранное
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Box mb={"24px"} width={"1190px"} height={"1px"} bgcolor={"#ededed"}></Box>

          <Stack direction={"row"} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={"32px"}>
              <Stack>
                <img
                  width={"400px"}
                  height={"400px"}
                  src={data.img}
                  alt={data.title}
                />
              </Stack>
              <Stack>
                <Typography mb={"8px"} fontWeight={"500"} fontSize={"16px"} color="#333">
                  Объем памяти
                </Typography>
                <Typography mb={"24px"} fontWeight={"400"} fontSize={"16px"} color="#333">
                  {data.rame}
                </Typography>
                <Typography mb={"16px"} fontWeight={"500"} fontSize={"16px"} color="#333">
                  Характеристики
                </Typography>
                <Typography mb={"16px"} fontWeight={"400"} fontSize={"16px"} color="#999">
                  Цвет:<span style={{ color: "#333" }}> {data.color}</span>
                </Typography>
                <Typography mb={"16px"} fontWeight={"400"} fontSize={"16px"} color="#999">
                  память:<span style={{ color: "#333" }}> {data.rame}</span>
                </Typography>
                <Typography mb={"16px"} fontWeight={"400"} fontSize={"16px"} color="#999">
                  brand:<span style={{ color: "#333" }}> {data.brand}</span>
                </Typography>
                <Typography fontWeight={"500"} fontSize={"16px"} color="red">
                  Все характеристики
                </Typography>
              </Stack>
            </Stack>
            <Stack>
              <Stack
                sx={{
                  border: "1px solid #ededed",
                  width: "340px",
                  height: "167px",
                  padding: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-family)",
                    fontWeight: 500,
                    fontSize: "20px",
                    lineHeight: "120%",
                    textDecoration: "line-through !important",
                    color: "#999",
                    mb: "9px",
                  }}
                >
                  74 990.00 Сум
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--font-family)",
                    fontWeight: 600,
                    fontSize: "36px",
                    lineHeight: "122%",
                    color: "#333",
                    mb: "21px",
                  }}
                >
                  {data.price} Сум
                </Typography>

                {!inCart ? (
                  <Button
                    onClick={handleAddToCart}
                    sx={{
                      background: "#feee00",
                      width: "306px",
                      height: "40px",
                      fontFamily: "var(--font-family)",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "100%",
                      textAlign: "center",
                      color: "#333",
                    }}
                  >
                    В корзину
                  </Button>
                ) : (
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      border: "1px solid #f2e3e3",
                      padding: "4px",
                    }}
                  >
                    <Button
                      sx={{
                        fontSize: "20px",
                        fontWeight: 400,
                        backgroundColor: "#feee00",
                        width: "40px",
                        height: "40px",
                        color: "#333",
                      }}
                      onClick={handleMinus}
                    >
                      -
                    </Button>

                    <Button
                      sx={{
                        background: "#E3EEF0",
                        width: "306px",
                        height: "40px",
                        fontFamily: "var(--font-family)",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "100%",
                        textAlign: "center",
                        color: "#333",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "red", marginBottom: "4px" }}>
                        В корзине {quantity} шт
                      </span>
                      В корзину
                    </Button>

                    <Button
                      sx={{
                        fontSize: "20px",
                        fontWeight: 400,
                        backgroundColor: "#feee00",
                        width: "40px",
                        height: "40px",
                        color: "#333",
                      }}
                      onClick={handlePlus}
                    >
                      +
                    </Button>
                    {quantity === 0 && handleRemoveFromCart()}
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Stack>
          <Stack
            mt={"32px"}
            mb={"50px"}
            direction={"row"}
            alignItems={"center"}
            gap={"54px"}
          >
            <Typography fontWeight={"500"} fontSize={"24px"} color="#333">
              Характеристики
            </Typography>
            <Typography fontWeight={"400"} fontSize={"24px"} color="#999">
              Отзывы
            </Typography>
          </Stack>
        </Container>
      )}
    </>
  );
};
