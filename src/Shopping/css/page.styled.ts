import styled from 'styled-components';

export const Top = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
  font-family: var(--Gmarket-Sans-Bold);
  font-size: 24px;
  font-style: normal;
  line-height: normal;

  // background-color: lightgray;

  //   min-width: 390px;
  min-height: 120px;
`;

export const StampText = styled.p`
  padding: 0;
  margin: 0;
  font-family: 'Gmarket Sans TTF';
  font-family: var(--Gmarket-Sans-Bold);
  font-size: 16px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
`;

export const ProductsText = styled.p`
  padding: 0;
  font-family: 'Gmarket Sans TTF';
  font-size: 20px;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
`;

////////////////////////////////////////////////////// slider

export const AdSwiperItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 270px;
  border-radius: 20px;
  background-color: rgba(217, 217, 217, 1);

  font-weight: bolder;
`;

//////////////////////////////////////////////////////
export const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
