import styled from 'styled-components';

export const Top = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  flex-direction: column-reverse;

  text-align: center;
  font-family: var(--Gmarket-Sans-Bold);
  font-size: 20px;
  font-style: normal;
  line-height: normal;

  background-color: lightgray;

  //   min-width: 390px;
  min-height: 120px;
`;

export const StampText = styled.p`
  padding: 0;
  font-family: 'Gmarket Sans TTF';
  font-size: 16px;
  font-style: normal;
  font-weight: bolder;
  line-height: normal;
`;

export const StyledRoot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
