import SwiperCore, { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactElement, useRef } from 'react';
import { StyledRoot } from '../css/page.styled';

// interface MainSliderProps {
//   cardList: ReactElement[]; // 슬라이드에는 컴포넌트가 들어갑니다
//   slidesPerView: 3 | 4; // 한 번에 보이는 카드 수
// }

const Slider = (props: any) => {
  //   SwiperCore.use([Navigation, Scrollbar]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const settings = {
    spaceBetween: 20,
    scrollbar: { draggable: true, el: null },
    slidesPerView: 3,
  };
  return (
    <StyledRoot>
      <Swiper {...settings}>
        <SwiperSlide key={1}>1</SwiperSlide>
        <SwiperSlide key={2}>2</SwiperSlide>
        <SwiperSlide key={3}>3</SwiperSlide>
      </Swiper>
    </StyledRoot>
  );
};

export default Slider;
