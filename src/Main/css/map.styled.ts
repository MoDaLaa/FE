import styled, { css, keyframes } from 'styled-components';

interface MapSVGProps {
    isActive: boolean;
}
interface MapSVGPathProps {
    isActive: boolean;
    activePathIndex: number;
}

const fadeIn = keyframes`
  from {
      opacity: 0;
  }
  to {
      opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
      transform: translateY(0);
  }
  to {
      transform: translateY(-100%);
      opacity: 0;
  }
`;

export const MapSVG = styled.svg<MapSVGProps>`
  width: 100%;
  max-width: 375px;
  height: auto;
  transition: all 0.3s ease-in-out;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: scale(1.5);
    `}
    
  @media (min-width: 375px) {
    max-width: 100%;
  }
`;

export const MapSVGPath = styled.path<MapSVGPathProps>`
  transition: all 0.3s ease-in-out;

  ${({ isActive, activePathIndex }) =>
    isActive &&
    css`
      &.active {
        transform: scale(1.5);
        animation: ${fadeIn} 0.3s forwards;
      }
      &.hidden {
        animation: ${fadeOut} 0.3s forwards;
      }
    `}
`;