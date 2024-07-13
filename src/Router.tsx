import { Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './Login/Login';

export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
