import styled from 'styled-components';

export const BoxContainer = styled.div`
  position: relative; // position 설정을 위한 기준점 잡기
  margin-bottom: 50px;
`;

export const UIcontainer = styled.div`
  // 상속받음 : 너비,높이
  padding: 10px;

  position: absolute;
  top: 15px;
  left: 5px;
`;

export const SiteName = styled.span`
  color: var(--kakao-logo, #000);
  font-family: 'Noto Sans KR';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Time = styled.span`
  color: var(--kakao-logo, #000);
  font-family: 'Noto Sans KR';
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
