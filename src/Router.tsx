import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Main from './Main/Main';

import Shopping from './Shopping/Shopping';
import ShoppingContent from './Shopping/ShoppingContent';
import CollectionBook from './CollectionBook/Collection';
import MyPage from './MyPage/MyPage';
import Landing from './Landing/Landing';
import Modal from './shared/Modal/Modal';
import Redirection from './shared/Redirection/Redirection';
import TestView from './Camera/Camera';
import StampComplete from './Camera/StampComplete';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
        {/* Shoppingcontent = shopping/1와 같이 설정해야함 */}
        <Route path="/shoppingContent" element={<ShoppingContent />}></Route>
        <Route path="/collection" element={<CollectionBook />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/modal" element={<Modal />}></Route>
        {/* 소셜로그인 하는 경우의 리디렉션 페이지 */}
        <Route path="/redirect" element={<Redirection />}></Route>
        <Route path="/camera" element={<TestView />}></Route>
        <Route path="/stamp-complete" element={<StampComplete />}></Route>
      </Routes>
    </>
  );
}
