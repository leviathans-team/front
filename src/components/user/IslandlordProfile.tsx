import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserInfo {
  INN: string;
  email: string;
  legal_entity: string;
  name: string;
  patronymic: string;
  phone: string;
  places: number[];
  post: string;
  surname: string;
}

interface UserPlace {
  approved: boolean;
  bookId: number;
  commonObjects: string;
  email: string;
  equipment: string;
  filterId: number;
  meta: string[];
  placeAddress: string;
  placeId: number;
  placeName: string;
  placeServices: string;
  rating: number;
  rentersCount: number;
  site: string;
  telephoneNumber: string;
  timeFrom: string;
  timeTo: string;
  totalSquare: number;
  userId: number;
  workingSquare: number;
  workingTime: string;
}

const IslandlordProfile: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [userPlaces, setUserPlaces] = useState<UserPlace[] | null>(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get<UserInfo>('http://37.18.110.184:3000/landlord/info');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных пользователя:', error);
      }
    };

    const fetchUserPlaces = async () => {
      try {
        const response = await axios.get<UserPlace[]>('http://37.18.110.184:3000/place/myPlace');
        setUserPlaces(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных о местах пользователя:', error);
      }
    };

    fetchUserInfo();
    fetchUserPlaces();
  }, []);

  if (!userInfo || !userPlaces) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      {/* Отображение данных пользователя */}
      <h1>{userInfo.name}</h1>
      <p>{userInfo.email}</p>
      {/* и так далее... */}

      {/* Отображение мест пользователя */}
      {userPlaces.map((place) => (
        <div key={place.placeId}>
          <h2>{place.placeName}</h2>
          <p>{place.placeAddress}</p>
          {/* и так далее... */}
        </div>
      ))}
    </div>
  );
};

export default IslandlordProfile;
