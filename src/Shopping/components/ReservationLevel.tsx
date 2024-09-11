import { Circle, Line } from '../css/page.styled';

export default function ReservationLevel() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#6A6A6A',
      }}
    >
      <Circle>1</Circle>
      <Line />
      <Circle>2</Circle>
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
  );
}
