import React, { useState } from "react";
import { useLocation, useParams } from "react-router";
import { useGetSingleNotebook } from "../../pages/Home/query/useGetNootbooks";
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
  const location = useLocation();
  console.log(location);

  const { data, isLoading, error } = useGetSingleNotebook(parseInt(id));

  const [inCart, setInCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    setInCart(true);
  };



  if (isLoading) {
    return <Typography>Yuklanmoqda...</Typography>;
  }

  if (error || !data) {
    return <Typography>Xatolik yuz berdi yoki ma'lumot topilmadi.</Typography>;
  }

  return (
    <Container>
      <Stack mb="19px">
        <Typography variant="h4">{data.title}</Typography>
        <Stack direction="row" alignItems="center" gap="50px">
          <Stack direction="row" alignItems="center" gap="12px">
            <Rating name="read-only" value={5} readOnly />
            <Typography fontWeight="400" fontSize="16px" color="#76bc21">
              (0)
            </Typography>
          </Stack>
          <Stack direction="row" gap="12px">
            <LikeIcon />
            <Typography fontWeight="400" fontSize="16px" color="#333">
              В избранное
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box mb="24px" width="1190px" height="1px" bgcolor="#ededed" />
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" gap="32px">
          <Stack>
            <img
              width="400px"
              height="400px"
              src={data.img}
              alt={data.title}
            />
          </Stack>
          <Stack>
            <Typography mb="8px" fontWeight="500" fontSize="16px" color="#333">
              Объем памяти
            </Typography>
            <Typography mb="24px" fontWeight="400" fontSize="16px" color="#333">
              {data.rame}
            </Typography>
            <Typography mb="16px" fontWeight="500" fontSize="16px" color="#333">
              Характеристики
            </Typography>
            <Typography mb="16px" fontWeight="400" fontSize="16px" color="#999">
              Цвет: <span style={{ color: "#333" }}>{data.color}</span>
            </Typography>
            <Typography mb="16px" fontWeight="400" fontSize="16px" color="#999">
              память: <span style={{ color: "#333" }}>{data.rame}</span>
            </Typography>
            <Typography mb="16px" fontWeight="400" fontSize="16px" color="#999">
              brand: <span style={{ color: "#333" }}>{data.brand}</span>
            </Typography>
            <Typography fontWeight="500" fontSize="16px" color="red">
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
                fontWeight: 500,
                fontSize: "20px",
                textDecoration: "line-through",
                color: "#999",
                mb: "9px",
              }}
            >
              74 990.00 Сум
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "36px",
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
                  fontWeight: 400,
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                В корзину
              </Button>
            ) : (
              <Stack
                direction="row"
                spacing={1}
                sx={{ border: "1px solid #f2e3e3", padding: "4px" }}
              >
                <Button
                  sx={{
                    fontSize: "20px",
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
                    fontSize: "16px",
                    color: "#333",
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
                    backgroundColor: "#feee00",
                    width: "40px",
                    height: "40px",
                    color: "#333",
                  }}
                  onClick={handlePlus}
                >
                  +
                </Button>
              </Stack>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
