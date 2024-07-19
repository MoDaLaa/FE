import Slider from './components/Swiper';
import * as Styled from './css/page.styled';

export default function Shopping() {
  return (
    <>
      <div
        className="shopping-container"
        style={{
          width: '100%',
          height: '100%',

          color: 'black',
        }}
      >
        <Styled.Top>
          <p style={{ marginBottom: '20px' }}>쇼핑하기</p>
        </Styled.Top>
        <div
          className="shopping-container-underTop"
          style={{
            width: '95%',
            marginLeft: '5%',
          }}
        >
          <Slider>123</Slider>
          <Styled.StampText>스탬프 현황</Styled.StampText>
        </div>
      </div>
    </>
  );
}
