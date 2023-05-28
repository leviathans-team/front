import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserInfo {
  email: string;
  name: string;
  patronymic: string;
  phone: string;
  surname: string;
}

interface UserBooking {
  bookId: number;
  placeId: number;
  timeFrom: string;
  timeTo: string;
  userId: number;
}

interface LikedPlace {
  // Добавьте необходимые поля для места
}

const UserProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userBookings, setUserBookings] = useState<UserBooking[] | null>(null);
  const [likedPlaces, setLikedPlaces] = useState<LikedPlace[] | null>(null); // заглушка

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get<UserInfo>('http://37.18.110.184:3000/user/info');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }
    };

    const fetchUserBookings = async () => {
      try {
        const response = await axios.get<UserBooking[]>('http://37.18.110.184:3000/myOrders');
        setUserBookings(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных о бронированиях пользователя:', error);
      }
    };

    // Заглушка для получения данных о лайках на места
    const fetchLikedPlaces = async () => {
      try {
        // Здесь будет ваш запрос к API для получения данных о лайках на места пользователя
        const response = await axios.get<LikedPlace[]>('http://your-api-url');
        setLikedPlaces(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных о лайках на места пользователя:', error);
      }
    };

    fetchUserInfo();
    fetchUserBookings();
    fetchLikedPlaces();
  }, []);

  if (!userInfo || !userBookings) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      {/* Отображение данных пользователя */}
      <h1>{userInfo.name}</h1>
      <p>{userInfo.email}</p>
      {/* и так далее... */}

      {/* Отображение информации о бронированиях */}
      {userBookings.map((booking) => (
        <div key={booking.bookId}>
          <h2>{booking.placeId}</h2>
          <p>
            {booking.timeFrom} - {booking.timeTo}
          </p>
          {/* и так далее... */}
        </div>
      ))}

      {/* Отображение лайкнутых мест пользователя */}
      
    </div>
  );
};

export default UserProfile;
