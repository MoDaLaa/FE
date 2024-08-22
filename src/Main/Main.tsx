import TopAppBar from './components/TopAppBar';
import StateBox from './components/StateContainer/StateContainer';
import DateandAreaInfo from './components/DateAreaInfo';
import Map from './components/Map/Map';
import BottomNavigationBar from './components/BottomNavigationBar';
import * as Styled from "./css/main.styled";
import TownMenu from './components/TownMenu';

export default function Main() {
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