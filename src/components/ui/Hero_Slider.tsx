// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


// import { Navigation, Pagination } from 'swiper/modules';

export default function Hero_Slider() {
  const slidesImages = [
    { src: '/assets/images/slider.webp', alt: 'Image Description' },
    { src: '/assets/images/slider.webp', alt: 'Image Description' },
    { src: '/assets/images/slider.webp', alt: 'Image Description' },
  ];
  return (
    <>
      <div className="slider">
        <div className="swap flex overflow-hidden gap-2">
          {slidesImages.map((slide) => (
            <img src={slide.src} alt={slide.alt} />
          ))}
        </div>
      </div>
    </>
  );
}
