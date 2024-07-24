import { Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './Login/Login';

import Shopping from './Shopping/Shopping';
import ShoppingContent from './Shopping/ShoppingContent';
import CollectionBook from './CollectionBook/Collection';
import MyPage from './MyPage/MyPage';


export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/shopping" element={<Shopping />}></Route>
        {/* Shoppingcontent = shopping/1와 같이 설정해야함 */}
        <Route path="/shoppingContent" element={<ShoppingContent />}></Route>

        <Route path="/collection" element={<CollectionBook />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </>
  );
}
