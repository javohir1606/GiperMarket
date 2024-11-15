import { Stack } from "@mui/system";
import { Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/img/logo.svg";
import img from "../../assets/img/feecbook.svg";
import card from "../../assets/img/card.svg";
import card1 from "../../assets/img/card1.svg";
import card2 from "../../assets/img/card2.svg";
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <>
    <Stack py={"40px"} bgcolor={"#F5F5F6"}>
      <Container>
        <Stack direction={"row"} gap={"120px"}>
          <Stack>
            <img src={logo} alt="logo" />
            <Stack mt={"16px"}>
              <Link
                href="tel:+998933746644"
                sx={{
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "21px",
                  color: "#333",
                }}
              >
                +99 890 253-77-53
              </Link>
              <Typography
                mb={"12px"}
                fontWeight={"400"}
                fontSize={"16px"}
                color="#333"
              >
                справочная служба
              </Typography>
              <Link
                href="tel:+998933746644"
                sx={{
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "21px",
                  color: "#333",
                }}
              >
                +99 893 374-66-44
              </Link>
              <Typography
                mb={"12px"}
                fontWeight={"400"}
                fontSize={"16px"}
                color="#333"
              >
                справочная служба
              </Typography>
            </Stack>
            <Stack mb={"36px"}>
              <Typography mb={"8px"} fontWeight={"600"} fontSize={"14px"} color="#333">Оставайтесь на связи</Typography>
              <Stack direction={"row"} gap={"16px"} alignItems={"center"}>
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
                <img src={img} alt="img" />
              </Stack>
            </Stack>
          </Stack>
          <Stack>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Условия обмена и возврата</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Каталог</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">О компании</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Контакты</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Доставка</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Оплата</Typography>
          </Stack>
          <Stack>
          <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Клиентам</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Личный кабинет</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Блог</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Обратная связь</Typography>
          </Stack>
          <Stack>
          <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Информация</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Пользовательское соглашение</Typography>
            <Typography mb={"16px"} fontWeight={"400"} fontSize={"14px"} color="#333">Политика конфиденциальности и оферта</Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
    <Stack py={"30px"} p={"10px"} bgcolor={"#EAEAEA"}>
         <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
          <Typography fontWeight={"400"} fontSize={"14px"} color="#333">© 2022 Любое использование контента без письменного разрешения запрещено</Typography>
          <Stack direction={"row"} gap={"24px"} alignItems={"center"}>
            <img src={card} alt="img" />
            <img src={card1} alt="img" />
            <img src={card2} alt="img" />
          </Stack>
         </Stack>
    </Stack>
    </>
   
  );
};
