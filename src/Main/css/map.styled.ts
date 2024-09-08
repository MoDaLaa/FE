import styled from 'styled-components';

export const MapSVG = styled.svg`
  position: relative;
  width: 100%;
  max-width: 375px;
  height: auto;
  transition: all 0.3s ease-in-out;
  @media (min-width: 375px) {
    max-width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MapSVGPath = styled.path`
  display: flex;
  align-items: center;
  justify-content: center;
`;