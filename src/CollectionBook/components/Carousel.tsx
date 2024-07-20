import { useEffect, useRef } from 'react';
import * as Styled from '../css/carousel.styled';
import Swiper from 'swiper';

export default function Carousel() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new Swiper(containerRef.current, {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
        },
      });
    }
  }, []);

  return (
    <>
      {/* <!-- Slider main container --> */}
      <Styled.CarouselContainer className="swiper-container" ref={containerRef}>
        <div className="swiper-wrapper">
          <CarouselSlide name="천마총" />
          <CarouselSlide name="첨성대" />
          <CarouselSlide name="불국사" />
        </div>
        <div className="swiper-pagination"></div>
      </Styled.CarouselContainer>
    </>
  );
}

interface SlideDataProps {
  name: string;
  backgroundImg?: string;
}
function CarouselSlide({ name }: SlideDataProps) {
  return (
    <>
      <Styled.CarouselSlide className="swiper-slide">
        <Styled.OneSlideLocationName>{name}</Styled.OneSlideLocationName>
        <Styled.OneSlideMapDiv>지도</Styled.OneSlideMapDiv>
      </Styled.CarouselSlide>
    </>
  );
}
