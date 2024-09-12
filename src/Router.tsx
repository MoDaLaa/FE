import { Route, Routes } from 'react-router-dom';
import Login from './login/Login';
import Main from './main/Main';

import Shopping from './shopping/Shopping';
import ShoppingContent from './shopping/ShoppingContent';
import CollectionBook from './collection-book/Collection';
import MyPage from './my-page/MyPage';
import Landing from './landing/Landing';
import Redirection from './shared/Redirection/Redirection';
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
          {/* 상세 지도 */}
          <Route path="/Gyeongju-sinae-kwon" element={<Downtown />}></Route>
          <Route path="/Bulguksa-kwon" element={<Bulguksa />}></Route>
          {/* Shoppingcontent = shopping/1와 같이 설정해야함 */}
          <Route path="/shoppingContent" element={<ShoppingContent />}></Route>
          <Route path="/collection" element={<CollectionBook />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/modal" element={<MapDescription />}></Route>
          {/* 소셜로그인 하는 경우의 리디렉션 페이지 */}
          <Route path="/redirect" element={<Redirection />}></Route>
        </Routes>
    </>
  );
}
