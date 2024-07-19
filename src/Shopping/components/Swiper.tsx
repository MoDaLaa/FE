// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import * as Styled from '../css/page.styled';
import { FreeMode } from 'swiper/modules';

const navItems = ['Top 10', '내 주변', '숙소', '교통', '기념품'];

export default function Category() {
  return (
    <Swiper
      style={{ margin: '20px 0' }}
      slidesPerView={4}
      freeMode={true}
      spaceBetween={30}
      grabCursor={true}
      modules={[FreeMode]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {navItems.map((item, index) => (
        <SwiperSlide key={index}>
          <Styled.SliderItem>{item}</Styled.SliderItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
