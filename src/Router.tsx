import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Main from './Main/Main';

import Shopping from './Shopping/Shopping';
import ShoppingContent from './Shopping/ShoppingContent';
import CollectionBook from './CollectionBook/Collection';
import MyPage from './MyPage/MyPage';
import Landing from './Landing/Landing';
import Modal from './shared/Modal/Modal';

export default function Router() {
  return (
    <>
      <Routes>
        m<Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/shopping" element={<Shopping />}></Route>
        {/* Shoppingcontent = shopping/1와 같이 설정해야함 */}
        <Route path="/shoppingContent" element={<ShoppingContent />}></Route>
        <Route path="/collection" element={<CollectionBook />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/modal" element={<Modal />}></Route>
        <Route path="/main" element={<Main />}></Route>
      </Routes>
    </>
  );
}
