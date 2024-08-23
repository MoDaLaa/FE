import { useEffect } from 'react';
import TopAppBar from './components/TopAppBar';
import StateBox from './components/StateContainer/StateContainer';
import DateandAreaInfo from './components/DateAreaInfo';
import Map from './components/Map/Map';
import BottomNavigationBar from './components/BottomNavigationBar';
import * as Styled from "./css/main.styled";

export default function Main() {
    {/* css로 maincontainer에 따로 배경색을 입힐 수 있으나 스크롤시 이벤트를 감지하여
     따로 배경색을 추가하여 설정해줘야 했기 때문에, 아래와 같이 useEffect를 사용하여 컴포넌트 렌더링 시 body 배경색 변경 */}
    useEffect(() => {
        // 컴포넌트가 마운트될 때 body 배경색 설정
        document.body.style.backgroundColor = '#D6EFAE';
    
        // 컴포넌트가 언마운트될 때 배경색 초기화
        return () => {
          document.body.style.backgroundColor = '';
        };
    }, []);


    return (
        <Styled.MainContainer>
            <TopAppBar />
            <DateandAreaInfo />
            <StateBox />
            <Map />
            <BottomNavigationBar />
        </Styled.MainContainer>
    );
}