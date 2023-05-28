import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

type PlaceData = {
  approved: boolean;
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
  totalSquare: number;
  workingSquare: number;
  workingTime: string;
  imageUrl: string;
};

const Place: React.FC<{ data: PlaceData }> = ({ data }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={data.imageUrl}
        alt="place image"
      />
      <CardContent>
        <Typography variant="h5">Название: {data.placeName}</Typography>
        <Typography variant="body1">Адрес: {data.placeAddress}</Typography>
        <Typography variant="body1">Режим работы: {data.workingTime}</Typography>
        <Typography variant="body1">Номер телефона: {data.telephoneNumber}</Typography>
        <Typography variant="body1">Электронная почта: {data.email}</Typography>
        <Typography variant="body1">Сайт: {data.site}</Typography>
        <Typography variant="body1">Услуги: {data.placeServices}</Typography>
        <Typography variant="body1">Общая площадь: {data.totalSquare} кв. м</Typography>
        <Typography variant="body1">Рабочая площадь: {data.workingSquare} кв. м</Typography>
        <Typography variant="body1">Объекты общего пользования: {data.commonObjects}</Typography>
        <Typography variant="body1">Оборудование: {data.equipment}</Typography>
        <Typography variant="body1">Число арендаторов: {data.rentersCount}</Typography>
      </CardContent>
    </Card>
  );
};

export default Place;
