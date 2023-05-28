import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/Auth/login/LoginPage';
import SignupPage from './components/Auth/signup/SignupPage';
import SignupBusinessPage from './components/Auth/signup/SignupBusinessPage';
import MainPage from './pages/MainPage';
import Place from './pages/Place';



const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route path="/signupbusiness" element={<SignupBusinessPage/>} />
			<Route path="/main" element={<MainPage/>} />
      <Route path="/place" element={<Place data={{
        approved: false,
        commonObjects: '',
        email: '',
        equipment: '',
        filterId: 0,
        meta: [],
        placeAddress: '',
        placeId: 0,
        placeName: '',
        placeServices: '',
        rating: 0,
        rentersCount: 0,
        site: '',
        telephoneNumber: '',
        totalSquare: 0,
        workingSquare: 0,
        workingTime: '',
        imageUrl: ''
      }}/>} />
    </Routes>
  );
};
export default AppRouter;
