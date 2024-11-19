import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Grid2, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { Pagination, Autoplay, Scrollbar, Navigation } from "swiper/modules";
import { useGetCatalog } from "./query/useGetCatalog";
import { Catalog } from "../../components/catalog/catalog";
import { Banner } from "../../components/banner/banner";
import { useGetPhones } from "./query/useGetPhones";
import { ProductCard } from "../../components/productCard/productCard";
import { AksiyaCrad } from "../../components/Aksiya/aksiya";
import { useGetAds } from "./query/useGetAds";
import { PhoneCard } from "../../components/phone/phone";
import { useGetNotebook } from "./query/useGetnooutbok";
import { useGetBanner } from "./query/useGetBarend";
import { BarendCard } from "../../components/barend/barend";

export const Home = () => {
  const { data } = useGetCatalog();
  const { data: phone } = useGetPhones();
  const { data: ads } = useGetAds();
  const { data: notebook } = useGetNotebook();
  const { data: brand } = useGetBanner();

  return (
    <Box>
      <Banner />
      <Container maxWidth="xs">
        <Stack direction={"row"} alignItems={"center"} mx={"43px"} py={"32px"}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={"20px"}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <Catalog {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>


      <Container
        maxWidth="xs"
        sx={{ pt: "16px", pb: "48px", position: "relative" }}
      >
        <Stack>
          <Typography mb={"24px"} variant="h5">
            Смартфоны и планшеты
          </Typography>
          <Stack direction={"row"} gap={"24px"}>
            <Swiper
              modules={[Pagination, Scrollbar, Navigation]}
              slidesPerView={5}
            >
              {phone?.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard {...item} addToCart={() => addToCart(item.id)} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>

      

      <Stack bgcolor={"#00CBFE"} mb={"60px"}>
        <Container maxWidth={"xs"}>
          <Typography
            fontWeight={"600"}
            fontSize={"16px"}
            mt={"16px"}
            mb={"24px"}
            ml={"30px"}
          >
            Акции
          </Typography>
          <Grid2 container spacing={"20px"} justifyContent="center">
            {ads?.map((item) => (
              <Grid2 key={item.id}>
                <Box display="flex" justifyContent="center">
                  <AksiyaCrad {...item} />
                </Box>
              </Grid2>
            ))}
          </Grid2>
        </Container>
      </Stack>
      <Container maxWidth={"xs"}>
        <Stack direction={"row"} gap={"34px"}>
          <Stack>
            <Typography
              fontWeight={"400"}
              fontSize={"24px"}
              color="#333"
              mb={"39px"}
            >
              Смартфоны и планшеты
            </Typography>
            {phone?.slice(0, 3).map((item) => (
              <Stack mb={"24px"} key={item.id}>
                <PhoneCard {...item} />
              </Stack>
            ))}
          </Stack>
          <Stack>
            <Typography
              fontWeight={"400"}
              fontSize={"24px"}
              color="#333"
              mb={"39px"}
            >
              Ноутбуки, планшеты и компьютеры
            </Typography>
            {notebook?.slice(0, 3).map((item) => (
              <Stack mb={"24px"} key={item.id}>
                <PhoneCard {...item} />
              </Stack>
            ))}
          </Stack>
          <Stack>
            <Typography
              fontWeight={"400"}
              fontSize={"24px"}
              color="#333"
              mb={"39px"}
            >
              Смартфоны и планшеты
            </Typography>
            {phone?.slice(0, 3).map((item) => (
              <Stack mb={"24px"} key={item.id}>
                <PhoneCard {...item} />
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Container>
      <Container
        maxWidth="xs"
        sx={{ pt: "16px", pb: "48px", position: "relative" }}
      >
        <Stack>
          <Typography mb={"24px"} variant="h5">
            Смартфоны и планшеты
          </Typography>
          <Stack direction={"row"} gap={"24px"}>
            <Swiper
              modules={[Pagination, Scrollbar, Navigation]}
              slidesPerView={5}
            >
              {phone?.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>
      <Container
        maxWidth="xs"
        sx={{ pt: "16px", pb: "48px", position: "relative" }}
      >
        <Stack>
          <Typography mb={"24px"} variant="h5">
            Смартфоны и планшеты
          </Typography>
          <Stack direction={"row"} gap={"24px"} justifyContent={"center"}>
            <Swiper
              modules={[Pagination, Scrollbar, Navigation]}
              slidesPerView={4}
            >
              {notebook?.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth={"xs"}>
        <Stack mb={"100px "}>
          <Typography
            fontWeight={"400"}
            fontSize={"24px"}
            color="#333"
            mb={"24px"}
          >
            Популярные бренды
          </Typography>
          <Grid2 container spacing={"26px"} textAlign={"start"} mx={"auto"}>
            {brand?.map((item) => (
              <Grid2 size={1.7} key={item.id}>
                <BarendCard {...item} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </Container>
    </Box>
  );
};
