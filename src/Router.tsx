import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Main from './main/Main';

import Shopping from './shopping/Shopping';
import ShoppingContent from './shopping/ShoppingContent';
import CollectionBook from './collection-book/Collection';
import MyPage from './my-page/MyPage';
import Landing from './landing/Landing';
import Redirection from './shared/Redirection/Redirection';
import TestView from './Camera/Camera';
import StampComplete from './Camera/StampComplete';
import BottomNavigationBar from './shared/BottomNavigationBar/BottomNavigationBar';
import Reservation from './shopping/Reservation';
import View from './Camera/Camera';
import ReservationResult from './shopping/ReservationResult';
import Bulguksa from './main/components/map/Bulguksa';
import Downtown from './main/components/map/Downtown';
import MapDescription from './map-description/MapDescription';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
        <Route path="/camera" element={<View />}></Route>
        {/* 상세 지도 */}
        <Route path="/Gyeongju-sinae-kwon" element={<Downtown />}></Route>
        <Route path="/Bulguksa-kwon" element={<Bulguksa />}></Route>
        {/* Shoppingcontent = shopping/1와 같이 설정해야함 */}
        <Route path="/shoppingContent" element={<ShoppingContent />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/reservationresult" element={<ReservationResult />}></Route>
        <Route path="/collection" element={<CollectionBook />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/modal" element={<MapDescription />}></Route>
        {/* 소셜로그인 하는 경우의 리디렉션 페이지 */}
        <Route path="/redirect" element={<Redirection />}></Route>
      </Routes>
    </>
  );
}
