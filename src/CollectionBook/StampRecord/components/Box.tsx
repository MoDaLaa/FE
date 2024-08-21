import { SiteDataTypes } from '../types/box';
import * as Styled from '../css/box.styled';

export default function Box({ name, time, successed }: SiteDataTypes) {
  return (
    <Styled.BoxContainer className="box-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="280"
        height="92"
        viewBox="0 0 280 92"
        fill="none"
      >
        <path
          d="M-3.49691e-07 88C-1.56562e-07 90.2091 1.79086 92 4 92L276 92C278.209 92 280 90.2091 280 88L280 14.5C280 12.2908 278.209 10.5 276 10.5L24.5787 10.5C23.9257 10.5 23.2825 10.3401 22.7055 10.0343L5.8732 1.11289C3.20913 -0.299103 -7.90022e-06 1.63203 -7.63663e-06 4.64716L-3.49691e-07 88Z"
          fill="#BBE5A6"
        />
      </svg>
      <Styled.UIcontainer className="real-ui-container">
        <Styled.SiteName>{name}</Styled.SiteName>
        <Styled.Time>{time}</Styled.Time>
        <p
          style={{
            color: '#000',
            fontFamily: 'Noto Sans KR',
            fontSize: '12px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',
          }}
        >
          {successed ? '스탬프 받기 완료!' : '스탬프 받기 실패...'}
        </p>
      </Styled.UIcontainer>
    </Styled.BoxContainer>
  );
}
