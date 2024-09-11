import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Login from './Login/Login';
import Main from './Main/Main';

import Shopping from './Shopping/Shopping';
import ShoppingContent from './Shopping/ShoppingContent';
import CollectionBook from './CollectionBook/Collection';
import MyPage from './MyPage/MyPage';
import Landing from './Landing/Landing';
import Redirection from './shared/Redirection/Redirection';
import TestView from './Camera/Camera';
import StampComplete from './Camera/StampComplete';
import BottomNavigationBar from './shared/BottomNavigationBar/BottomNavigationBar';
import Bulguksa from './Main/components/Map/Bulguksa';
import Downtown from './Main/components/Map/Downtown';
import MapDescription from './MapDescription/MapDescription';
import Reservation from './Shopping/Reservation';
import View from './Camera/Camera';
import ReservationResult from './Shopping/ReservationResult';

export default function Router() {
  return (
    <>
      <AnimatePresence>
        <BottomNavigationBar />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
          <Route path="/camera" element={<View />}></Route>
          {/* 상세 지도 */}
          <Route path="/main/Gyeopngju-sinae-kwon" element={<Downtown />}></Route>
          <Route path="/main/Bulguksa-kwon" element={<Bulguksa />}></Route>
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
      </AnimatePresence>
    </>
  );
}
