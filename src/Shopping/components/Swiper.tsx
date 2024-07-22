// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import * as Styled from '../css/page.styled';
import { Pagination } from 'swiper/modules';

const navItems = [
  {
    id: 1,
    img: 'url',
  },
  {
    id: 2,
    img: 'url',
  },
];

export default function Swipers() {
  return (
    <Swiper
      style={{ margin: '20px 5% 20px 0' }}
      pagination={true}
      modules={[Pagination]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {navItems.map((item, index) => (
        <SwiperSlide key={index}>
          <Styled.AdSwiperItem>{item.img}</Styled.AdSwiperItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
