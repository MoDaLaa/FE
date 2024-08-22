import styled from 'styled-components';

export const TalkBubble = styled.div`
  z-index: 100;//맨 위로 올려줌
  position: relative;
  width: 59px;
  height: 29px;
  background: #ffffff;
  color: #000000;
  border-radius: 20px;
  padding: 12px 12.8px;
  margin-bottom:60px; 
  //after은 말풍선 꼬리
  &:after {
    border-top: 40px solid #ffffff;//말풍선 길이
    border-left: 20px solid transparent;
    border-right: 20px solid transparent; //말풍선 너비 조정
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 30px;//말풍선 꼬리 위치 조정(width+90px)
    left: 30%;//말풍선 꼬리 위치 조정
    border-radius: 20px;
  }
`;