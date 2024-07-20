import styled from 'styled-components';

export const CarouselContainer = styled.div`
  width: 100%;
  /* 기본, 최소, 최대 */
  height: clamp(200px, 30svh, 40svh);
  overflow: hidden;

  margin-top: 54px;
`;

export const CarouselSlide = styled.div`
  /* 기본, 최소, 최대 */
  width: clamp(165px, 20svh, 30svh);
  height: clamp(165px, 20svh, 30svh);
  padding-bottom: 15px;

  text-align: center;
  font-size: 18px;

  border-radius: 20px;
  background: linear-gradient(180deg, #c1f0fa 0%, #cfdefd 100%);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

export const OneSlideLocationName = styled.p`
  color: #4e6caa;
  font-family: var(--Gmarket-Sans-Light);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const OneSlideMapDiv = styled.div`
  width: 55px;
  height: 20px;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.06);

  /* 내부 텍스트 설정 */
  color: #1c1c1c;
  font-family: var(--Gmarket-Sans-Light);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  /* flex 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
`;
