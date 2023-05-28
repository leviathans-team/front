import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/auth/login/LoginPage';
import { FC } from 'react';
import SignupPage from './components/auth/signup/SignupPage';
import SignupBusinessPage from './components/auth/signup/SignupBusinessPage';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/signupbusiness" element={<SignupBusinessPage/>} />
    </Routes>
  );
};
export default AppRouter;
