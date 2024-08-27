import styled, { css } from 'styled-components';

interface ArrowBubbleProps {
  isSvg?: boolean; 
  size: string; 
}

export const ArrowBubble = styled.div<ArrowBubbleProps>`
  ${({ isSvg, size }) => {
    if (isSvg) {
      switch (size) {
        case '3':
          return css`width: 70px;`;
        case '4':
          return css`width: 80px;`;
        case '5':
          return css`width: 90px;`;
        default:
          return css`width: 100px;`;
      }
    } else {
      switch (size) {
        case '3':
          return css`width: 85px;`;
        case '4':
          return css`width: 100px;`;
        case '5':
          return css`width: 117px;`;
        default:
          return css`width: 100px;`;
      }
    }
  }}

  height:  ${({ isSvg }) => (isSvg ? '32px' : '36px')};
  background: ${({ isSvg }) => (isSvg ? '#ffffff' : '#D6EFAE')};
  border: ${({ isSvg }) => (isSvg ? 'none' : '1px solid #000000')};
  border-radius: ${({ isSvg }) => (isSvg ? '3px' : '5px')};
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 4px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: ${({ isSvg }) => (isSvg ? '16px' : '18px')};
  white-space: nowrap; // 줄바꿈 방지

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: ${({ isSvg }) => (isSvg ? '24px' : '24px')};
    right: ${({ isSvg }) => (isSvg ? 'calc(50% - 7.5px)' : 'calc(50% - 10px)')};
    width: ${({ isSvg }) => (isSvg ? '15px' : '20px')};
    height: ${({ isSvg }) => (isSvg ? '15px' : '20px')};
    background: ${({ isSvg }) => (isSvg ? '#ffffff' : '#D6EFAE')};
    border-radius: ${({ isSvg }) => (isSvg ? '0px 0px 0px 3px' : '0px 0px 0px 5px')};
    box-shadow: -4px 4px 4px 0px #00000040;
    border-left: ${({ isSvg }) => (isSvg ? 'none' : '1px solid #000000')};
    border-bottom: ${({ isSvg }) => (isSvg ? 'none' : '1px solid #000000')};
    transform: rotate(-45deg);
  }

  @media (max-width: 390px) { // 아이폰 12 Pro 기준
    width: ${({ isSvg }) => (isSvg ? '70px' : '80px')}; // 크기를 조정
    height: ${({ isSvg }) => (isSvg ? '32px' : '36px')}; // 높이 조정
    font-size: ${({ isSvg }) => (isSvg ? '14px' : '16px')}; // 글자 크기 조정
  }

  @media (min-width: 391px) and (max-width: 768px) {
    width: ${({ isSvg }) => (isSvg ? '80px' : '95px')}; // 태블릿 사이즈 조정
    height: ${({ isSvg }) => (isSvg ? '32px' : '36px')};
    font-size: ${({ isSvg }) => (isSvg ? '15px' : '17px')};
  }

  // 추가적으로 다른 화면 크기에 대한 미디어 쿼리를 추가할 수 있습니다.
`;

export const ArrowBubbleText = styled.div`
  z-index: 1;
  text-align: center;
  font-family: 'GmarketSansMedium';
  font-weight: 500;
`;
