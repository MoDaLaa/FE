import * as Styled from './css/page.styled';
import Swipers from './components/Swiper';
import ContentCategory from './components/ContentCategory';
import ImgFile from '/svg/Shopping/Img1.svg';
import Content1 from '/svg/Shopping/ShoppingContent1.svg';
import StarRating from './components/Rating';
import ButtonGroup from './components/ContentButton';
import Back from '/svg/Shopping/Back.svg';
import Cart from '/svg/Shopping/Cart.svg';
import { useState } from 'react';

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
  const [activeTab, setActiveTab] = useState('description'); // 상태 추가

  const renderContent = () => {
    if (activeTab === 'description') {
      return (
        <div>
          <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
            <div style={{ width: '50%' }}>
              <p style={{ fontFamily: 'var(--Gmarket-Sans-Medium)', fontSize: '12pt' }}>날짜</p>
              <div
                style={{
                  border: '1px solid #999999',
                  borderRadius: '10px',
                  fontFamily: 'var(--Gmarket-Sans-Medium)',
                  fontSize: '10pt',
                  textAlign: 'center',
                  padding: '10px 5px',
                }}
              >
                07/15~07/19 4박
              </div>
            </div>
            <div style={{ width: '50%' }}>
              <p style={{ fontFamily: 'var(--Gmarket-Sans-Medium)', fontSize: '12pt' }}>인원수</p>
              <div
                style={{
                  border: '1px solid #999999',
                  borderRadius: '10px',
                  fontFamily: 'var(--Gmarket-Sans-Medium)',
                  fontSize: '10pt',
                  textAlign: 'center',
                  padding: '10px 5px',
                }}
              >
                성인2 아동1
              </div>
            </div>
          </div>
          <div
            style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center',
              marginTop: '10px',
              padding: '5px',
              boxShadow: '1px',
              border: '1px solid lightgray',
            }}
          >
            <img width="90%" height="200px" src={Content1}></img>
            <div style={{ display: 'flex', width: '100%', gap: '10px' }}>
              <div
                style={{ width: '50%', fontFamily: 'var(--Gmarket-Sans-Medium)', fontSize: '12pt' }}
              >
                <p style={{ margin: '0', fontFamily: 'var(--Gmarket-Sans-Bold)' }}>
                  스파 룸 (최대 5인)
                </p>
                <p style={{ margin: '0' }}>79,900원~/1박</p>
                <p style={{ margin: '0', fontSize: '10pt', color: 'gray' }}>상세보기 {'>'}</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  width: '50%',
                  fontFamily: 'var(--Gmarket-Sans-Medium)',
                  fontSize: '10pt',
                  textAlign: 'end',
                  gap: '20px',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                }}
              >
                ★ 4.2(24)
                <Styled.ReservationButton>예약하기</Styled.ReservationButton>
              </div>
            </div>
          </div>
        </div>
      ); // 상세 설명 내용
    } else if (activeTab === 'reviews') {
      return <p>여기에 리뷰 내용이 들어갑니다.</p>; // 리뷰 내용
    }
  };
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
          <p style={{ margin: '0' }}>쇼핑하기</p>
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
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '2px solid black',
              paddingBottom: '10px',
              fontWeight: 'bolder',
            }}
          >
            경주 시내에서 nkm
            <div
              style={{
                display: 'grid',
                textAlign: 'end',
                fontSize: '10pt',
                gap: '5px',
              }}
            >
              <p style={{ margin: '0', color: '#5653FF' }}>인기숙소</p>
              <p
                style={{
                  margin: '0',
                  color: '#FF4444',
                  borderRadius: '10px',
                  border: '1px solid #FF4444',
                  padding: '2px 6px',
                }}
              >
                쿠폰적용가능
              </p>
            </div>
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
              정가 {navItems.price}원
            </p>
            <p style={{ textAlign: 'right', fontSize: '16px', margin: '0' }}>
              스탬프 사용 후{' '}
              <p
                style={{
                  display: 'inline-block',
                  fontSize: '26px',
                  fontWeight: 'bold',
                  margin: '10px 0 0 10px',
                }}
              >
                {(navItems.price * (100 - navItems.sales)) / 100}원
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
              {/* <Styled.ReservationButton className="reservation">예약하기</Styled.ReservationButton> */}
            </div>
            <div style={{ borderBottom: '2px solid rgb(217,217,217)' }}>
              <ButtonGroup />
            </div>
            <div style={{ marginTop: '20px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid lightgray',
                }}
              >
                <button
                  onClick={() => setActiveTab('description')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: 'white',
                    borderBottom:
                      activeTab === 'description' ? '1px solid black' : '1px solid lightgray',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--Gmarket-Sans-Medium)',
                  }}
                >
                  설명
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    backgroundColor: 'white',
                    borderBottom:
                      activeTab === 'reviews' ? '1px solid black' : '1px solid lightgray',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'var(--Gmarket-Sans-Medium)',
                  }}
                >
                  리뷰
                </button>
              </div>
              <div>
                {renderContent()} {/* 선택된 내용 렌더링 */}
              </div>
            </div>
          </div>
          <div style={{ height: '100px' }}></div>
        </div>
      </div>
    </>
  );
}
