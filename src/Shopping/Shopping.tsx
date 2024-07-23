import Category from './components/Category';
import ProgressState from './components/Progressbar';
import * as Styled from './css/page.styled';
import Swipers from './components/Swiper';

export default function Shopping() {
  return (
    <>
      <div
        className="shopping-container"
        style={{
          width: '100%',
          height: '100vh',

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
          <Category kind="category" />
          <Styled.StampText>스탬프 현황</Styled.StampText>
          <ProgressState />
          <Swipers type='shopping'/>
          <Styled.ProductsText>추천 상품</Styled.ProductsText>
          <Category kind="recommend" />
          <Styled.ProductsText>Top 10</Styled.ProductsText>
          <Category kind="top10" />
          <div style={{height:'100px'}}></div>
        </div>
      </div>
    </>
  );
}
