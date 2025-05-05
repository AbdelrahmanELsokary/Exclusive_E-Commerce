import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Hero_Slider() {
  return (
    <div className="w-[75%] mr-14">
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img className="m-auto" src="assets/images/slide.webp" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/slide2.webp" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/images/slide3.webp" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
