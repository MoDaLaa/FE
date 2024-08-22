import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import CollectionBook from './CollectionBook/Collection';
import MyPage from './MyPage/MyPage';
import Landing from './Landing/Landing';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/collection" element={<CollectionBook />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
      </Routes>
    </>
  );
}
