import {
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Form } from "../../components/form/form";
import { PhoneIcon } from "../../assets/icon/phoneIcon";
import { Profile } from "../../assets/icon/profile";
import { HeaderIcon } from "../../assets/icon/headerIcon";
import logo from "../../assets/img/logo.svg";
import { Korzinka } from "../../assets/icon/korzinka";
import { LikeIcon } from "../../assets/icon/likeIcon";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <Container maxWidth="xs" sx={{ pb: "18px" }}>
      <Stack>
        <Stack
          alignItems={"center"}
          pt={"8px"}
          pb={"8px"}
          justifyContent={"end"}
          gap={"24px"}
          direction={"row"}
        >
          <Typography>Доставка и оплата</Typography>
          <Typography>Пункты выдачи</Typography>
          <Typography>Поддержка</Typography>
          <Stack alignItems={"center"} gap={"16px"} direction={"row"}>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <Typography>+998 90 253 77 53</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        pt={"18px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <img src={logo} alt="logo" />
        </Stack>
        <Stack direction={"row"} gap={"32px"}>
          <Button startIcon={<HeaderIcon />} variant="contained">
            Каталог
          </Button>
          <Form />
        </Stack>
        <Stack direction={"row"} gap={"32px"} alignItems={"center"}>
          <Stack>
            <IconButton>
              <Profile />
            </IconButton>
            <Typography fontWeight={"400"} fontSize={"16px"} color="#333">Войти</Typography>
          </Stack>
          
          <Stack>
            <IconButton>
              <LikeIcon />
            </IconButton>
            <Typography fontWeight={"400"} fontSize={"16px"} color="#333">Избранное</Typography>
          </Stack>

          <Stack textAlign={"center"}>
            <Link to="korzinka" style={{ textDecoration: "none" }}>
              <IconButton>
                <Korzinka />
              </IconButton>
              <Typography fontWeight={"400"} fontSize={"16px"} color="#333">Корзина</Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};
