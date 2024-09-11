import { Circle, LevelText, Line } from '../css/page.styled';
import Check from '/svg/Shopping/Check.svg';

export default function ReservationLevel() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          color: '#6A6A6A',
        }}
      >
        <Circle style={{ background: '#3753F2', border: 'none' }}>
          <img src={Check} />
        </Circle>
        <Line style={{ border: '1px solid #3753F2' }} />
        <Circle style={{ background: '#3753F2', color: 'white', border: 'none' }}>2</Circle>
        <Line />
        <Circle>3</Circle>
        {/* <LevelBox>
        <Circle>1</Circle>
        <LevelText>객실 선택</LevelText>
      </LevelBox>
      <Line />
      <LevelBox>
        <Circle>2</Circle>
        <LevelText>세부 정보/결제</LevelText>
      </LevelBox>
      <Line />
      <LevelBox>
        <Circle>3</Circle>
        <LevelText>완료</LevelText>
      </LevelBox> */}
      </div>
      <div
        style={{
          display: 'flex',
          width: '300px',
          justifyContent: 'space-between',
        }}
      >
        <LevelText style={{ transform: 'translateX(-10%)', color: '#3753F2' }}>객실 선택</LevelText>
        <LevelText style={{ transform: 'translateX(-15%)', color: '#3753F2' }}>
          세부 정보/결제
        </LevelText>
        <LevelText style={{ left: '82%', transform: 'translateX(-44%)' }}>완료</LevelText>
      </div>
    </>
  );
}
