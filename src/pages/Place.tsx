import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

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

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(45deg, #3f51b5 30%, #212121 90%)',
  color: '#fff',
  height: '1500%',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: '180px',
}));

const Place: React.FC<{ data: PlaceData }> = ({ data }) => {
  return (
    <StyledCard>
      <StyledCardMedia component="img" image={data.imageUrl} alt="place image" />
      <StyledCardContent>
        <StyledTypography variant="h5">Название: {data.placeName}</StyledTypography>
        <StyledTypography variant="body1">Адрес: {data.placeAddress}</StyledTypography>
        <StyledTypography variant="body1">Режим работы: {data.workingTime}</StyledTypography>
        <StyledTypography variant="body1">Номер телефона: {data.telephoneNumber}</StyledTypography>
        <StyledTypography variant="body1">Электронная почта: {data.email}</StyledTypography>
        <StyledTypography variant="body1">Сайт: {data.site}</StyledTypography>
        <StyledTypography variant="body1">Услуги: {data.placeServices}</StyledTypography>
        <StyledTypography variant="body1">Общая площадь: {data.totalSquare} кв. м</StyledTypography>
        <StyledTypography variant="body1">Рабочая площадь: {data.workingSquare} кв. м</StyledTypography>
        <StyledTypography variant="body1">Объекты общего пользования: {data.commonObjects}</StyledTypography>
        <StyledTypography variant="body1">Оборудование: {data.equipment}</StyledTypography>
        <StyledTypography variant="body1">Число арендаторов: {data.rentersCount}</StyledTypography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default Place;
