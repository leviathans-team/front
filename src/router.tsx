import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Auth/login/LoginPage';
import SignupPage from './components/Auth/signup/SignupPage';
import SignupBusinessPage from './components/Auth/signup/SignupBusinessPage';
import MainPage from './pages/MainPage';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/signupbusiness" element={<SignupBusinessPage/>} />
			<Route path="/main" element={<MainPage/>} />
    </Routes>
  );
};
export default AppRouter;
