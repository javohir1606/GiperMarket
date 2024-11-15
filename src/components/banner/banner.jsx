import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination, Autoplay } from "swiper/modules";
import { useGetBanners } from "../../pages/Home/query/useGetBanners";

export const Banner = () => {
  const { data } = useGetBanners();
  return (
    <>
      <Swiper
        modules={[Pagination,Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <img style={{ width: "100%" }} src={item.img} alt="#" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};