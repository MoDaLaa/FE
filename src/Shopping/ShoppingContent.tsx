import * as Styled from './css/page.styled';
import Swipers from './components/Swiper';
import ContentCategory from './components/ContentCategory';
import ImgFile from '/public/svg/Shopping/Img1.svg';
import StarRating from './components/Rating';
import ButtonGroup from './components/ContentButton';
import Back from '/public/svg/Shopping/Back.svg';
import Cart from '/public/svg/Shopping/Cart.svg';

const navItems = {
  name: '황리단길 포근한 숙소',
  sales: 20,
  price: 79900,
  id: 1,
  img: ImgFile,
  distance: '1',
  like: 10789,
};

export default function ShoppingContent() {
  return (
    <>
      <div
        className="shopping-container"
        style={{
          width: '100%',
          height: '100vh',
          minWidth: '390px',

          color: 'black',
        }}
      >
        <Styled.Top>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              margin: '0 10px',
              justifyContent: 'flex-end',
              gap: '20px',
            }}
          >
            <li>
              <img src={Cart} />
            </li>
          </ul>
          <button
            style={{
              position: 'absolute',
              left: '5%',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img src={Back} />
          </button>
          <p style={{ margin: '0 0 20px 0' }}>쇼핑하기</p>
        </Styled.Top>
        <div
          className="shopping-container-underTop"
          style={{
            width: '90%',
            margin: '0 5%',
          }}
        >
          <ContentCategory text="숙소" />
          <div
            className="place-tag"
            style={{
              display: 'flex',
              gap: '10px',
              fontWeight: 'bolder',
            }}
          >
            <p># 경주 필수코스</p>
            <p># 경주 황리단길</p>
          </div>
          <Swipers type="shoppingContent" />
          <div
            style={{
              borderBottom: '2px solid black',
              paddingBottom: '10px',
              fontWeight: 'bolder',
            }}
          >
            경주 시내에서 nkm
          </div>
          <div
            className="information"
            style={{
              fontSize: '24px',
              fontWeight: '500',
              marginTop: '20px',
            }}
          >
            <Styled.ProductsText style={{ fontSize: '20pt', fontWeight: '100', margin: '0' }}>
              {navItems.name}
            </Styled.ProductsText>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StarRating score={4} />
              <p
                style={{
                  margin: '0',
                  fontFamily: 'Gmarket Sans TTF',
                  fontSize: '12pt',
                }}
              >
                4.7(89)
              </p>
            </div>
            <p style={{ textAlign: 'right', fontSize: '16px', margin: '0' }}>
              정가 {navItems.price}/1박
            </p>
            <p style={{ textAlign: 'right', fontSize: '16px', margin: '0' }}>
              스탬프 사용 후{' '}
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '30px',
                  fontWeight: 'bold',
                  margin: '10px 0 0 10px',
                }}
              >
                {(navItems.price * (100 - navItems.sales)) / 100}/1박
              </p>
            </p>
            <div
              className="like-reservation"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'end',
                padding: '20px 0',
                borderBottom: '1px solid #D9D9D9',
              }}
            >
              <p style={{ fontSize: '18px', margin: '0' }}>♥{navItems.like}</p>
              <button
                className="reservation"
                style={{
                  fontSize: '30px',
                  outline: 'none',
                  border: 'none',
                  width: '180px',
                  height: '60px',
                  borderRadius: '40px',
                }}
              >
                예약하기
              </button>
            </div>
            <div style={{ borderBottom: '2px solid black', paddingBottom: '20px' }}>
              <ButtonGroup />
              <div style={{ backgroundColor: '#D9D9D9', height: '50px' }}></div>
            </div>
            <div style={{ backgroundColor: '#D9D9D9', height: '1000px', marginTop: '30px' }}>
              상세 설명 적는 곳
            </div>
          </div>
          <div style={{ height: '100px' }}></div>
        </div>
      </div>
    </>
  );
}
