import ReservationLevel from './components/ReservationLevel';
import * as Styled from './css/page.styled';
import Back from '/svg/Shopping/Back.svg';
import CheckCircle from '/svg/Shopping/CheckCircle.svg';
import Content1 from '/svg/Shopping/ShoppingContent1.svg';
import Addperson from '/svg/Shopping/Addperson.svg';

export default function Reservation() {
  return (
    <>
      <div
        className="shopping-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          height: 'auto',
          minWidth: '390px',
          minHeight: '916px',

          color: 'black',
        }}
      >
        <Styled.Top>
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              margin: '0 10px',
              padding: '0',
              justifyContent: 'space-between',
              gap: '20px',
            }}
          >
            <li>
              <img src={Back} />
            </li>
          </ul>
        </Styled.Top>
        <ReservationLevel />
        <div
          style={{
            width: '90%',
            height: 'auto',
          }}
        >
          <p style={{ textAlign: 'center', fontWeight: 'bold' }}>
            대표명소에서 스탬프를 획득한 후<br /> 20% 할인쿠폰 받아가세요!
          </p>
          <Styled.BoxDiv>
            <img width="90%" height="200px" src={Content1}></img>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '90%',
                gap: '10px',
                fontFamily: 'var(--Gmarket-Sans-Medium)',
                fontSize: '12pt',
              }}
            >
              <p style={{ margin: '0', fontSize: '14pt' }}>황리단길 포근한 숙소</p>
              <p style={{ margin: '0', fontFamily: 'var(--Gmarket-Sans-Bold)' }}>
                9월 15일(토) - 9월19일(수) 4박
              </p>
              <p style={{ margin: '0', fontSize: '9pt' }}>
                스파 룸 (최대 5인) 더블 침대 2개 조식 포함 금연객실
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <p style={{ display: 'flex', gap: '5px', color: '#25B50E', fontSize: '9pt' }}>
                  <img src={CheckCircle} />
                  환불 언제든지 가능
                </p>
                <p style={{ fontSize: '9pt', fontFamily: 'var(--Gmarket-Sans-Light)' }}>
                  객실 정보 {'>'}
                </p>
              </div>
            </div>
          </Styled.BoxDiv>
          <Styled.BoxDiv>
            <div
              style={{
                width: '85%',
              }}
            >
              <p style={{ fontFamily: 'var(--Gmarket-Sans-Bold)', marginBottom: '0' }}>
                투숙객 정보
              </p>
              <p style={{ textAlign: 'end', margin: '0' }}>
                <img src={Addperson} />
              </p>
              <p
                style={{
                  fontFamily: 'var(--Gmarket-Sans-Medium)',
                  fontSize: '10pt',
                }}
              >
                대표 투숙객
              </p>
              <Styled.VisitorForm placeholder="성"></Styled.VisitorForm>
              <Styled.VisitorForm placeholder="이름"></Styled.VisitorForm>
              <Styled.VisitorForm placeholder="연락처"></Styled.VisitorForm>
              <Styled.VisitorForm placeholder="이메일"></Styled.VisitorForm>
            </div>
          </Styled.BoxDiv>
        </div>
      </div>
    </>
  );
}
