import { useEffect } from 'react';
import * as Styled from './kakaomap.styled';

export default function Kakaomap() {
  useEffect(() => {
    const mapScript = document.createElement('script');
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_APP_KEY}&autoload=false`; // autoload를 false로 하고 완전히 api script가 로드 된 후 kakao.maps에 접근하도록 하기
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.querySelector('.container #map'); //지도를 담을 영역의 DOM 레퍼런스
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        //마커가 표시 될 위치
        const markerPosition = new window.kakao.maps.LatLng(33.450701, 126.570667);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        // 마커를 지도 위에 표시
        marker.setMap(map);
      });
    };
    mapScript.addEventListener('load', onLoadKakaoMap); // mapScript가 완전히 로드 된 이후 onLoadKakaoMap event가 발생함
  }, []);

  return (
    <Styled.Container className="kakao-map container">
      <div
        className="texts-wrapper"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingBottom: '5px',
        }}
      >
        <Styled.Title>석굴암</Styled.Title>
        <Styled.LocationDescription>내 위치에서 5.2km</Styled.LocationDescription>
      </div>
      <div
        id="map"
        style={{
          width: '100%',
          height: '200px',
        }}
      ></div>
    </Styled.Container>
  );
}
