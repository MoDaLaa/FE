import Kakaomap from '../../../shared/KakaoMap/Kakaomap';
import Carousel from './components/Carousel';

export default function Attractions() {
  return (
    <div
      className="main-attractions-container"
      style={{
        width: '390px',
        height: '100%',
        flexShrink: 0,
        background: '#F6F6F6',
        filter: 'drop-shadow(0px 8px 35px rgba(0, 0, 0, 0.25))',
        borderRadius: '55px',
      }}
    >
      <p
        className="main-attractions__title"
        style={{
          paddingTop: '27px',
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'var(--kakao-logo, #000)',
          fontFamily: 'Gmarket Sans TTF',
          fontSize: '18px',
          fontWeight: 700,
        }}
      >
        대표 명소
      </p>
      <p
        className="main-attractions__description"
        style={{
          color: 'var(--kakao-logo, #000)',
          fontFamily: 'Gmarket Sans TTF',
          fontSize: '12px',
          fontWeight: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          paddingTop: '11px',
        }}
      >
        대표 명소에서만 스탬프를 받을 수 있어요!
      </p>
      <Carousel />
      <Kakaomap />
    </div>
  );
}
