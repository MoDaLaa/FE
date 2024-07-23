import React from 'react';
import styled from 'styled-components';
import Like from '../../assets/Like.svg';
import Star from '../../assets/Star.svg';
import Share from '../../assets/Share.svg';

// 버튼 컨테이너 스타일
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`;

// 버튼 스타일
const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items:center;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
  background-color: transparent;

  font-size:20px;
  gap:20px;
`;

const ButtonGroup: React.FC = () => {
  return (
    <ButtonContainer>
      <Button onClick={() => alert('좋아요!')}>
        <img width='50px' src={Like} />
        좋아요
      </Button>
      <Button onClick={() => alert('즐겨찾기 추가!')}>
        <img width='50px' src={Star} />
        즐겨찾기
      </Button>
      <Button onClick={() => alert('공유하기!')}>
        <img width='50px' src={Share} />
        공유하기
      </Button>
    </ButtonContainer>
  );
};

export default ButtonGroup;
