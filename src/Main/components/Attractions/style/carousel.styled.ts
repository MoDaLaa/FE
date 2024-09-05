import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  /* 슬라이드 하나의 너비, 높이 */
  width: 132px;
  height: 162px;
  padding: 19px 15px 15px;

  border-radius: 20px;
  background: linear-gradient(180deg, #f4d3fe 0%, #feccef 100%);
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.p`
  color: #ae64b9;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  font-weight: 700;

  margin: 0 0 5px 0;
`;

export const ImgBox = styled.img`
  width: 98px;
  height: 66px;
  flex-shrink: 0;
  border-radius: 10px;
  background: lightgray 50% / cover no-repeat;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);

  margin-bottom: 19px;
`;

export const MapLink = styled(Link)`
  width: 55px;
  height: 20px;
  padding: 3px 15px;
  flex-shrink: 0;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.06);
  text-decoration: none;

  color: #1c1c1c;
  font-family: 'Gmarket Sans TTF';
  font-size: 12px;
  font-weight: 500;
`;
