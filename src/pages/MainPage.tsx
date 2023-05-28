import React from 'react';
import { Grid } from '@mui/material';
import BookingCalendar from '../components/places/calendar/BookingCalendar';
import FilterCategories from '../components/places/filter/FilterCategories';
import InformationBlock from '../components/places/info/InformationBlock';
import SearchBar from '../components/places/search/SearchBar';
import ControlledPagination from '../components/places/pagination/Pagination';

const MainPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <SearchBar />
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <InformationBlock imageUrl={'111'} placeName={'Имя'} publishDate={'Дата'} description={'Описание'} onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } />
          </Grid>
          <Grid item xs={6}>
            <InformationBlock imageUrl={'111'} placeName={'Имя'} publishDate={'Дата'} description={'Описание'} onClick={function (): void {
                  throw new Error('Function not implemented.');
              } } />
          </Grid>
          {/* Добавьте другие пары InformationBlock аналогичным образом */}
        </Grid>
        <ControlledPagination />
      </Grid>
      <Grid item xs={4}>
        <BookingCalendar />
        <FilterCategories />
      </Grid>
    </Grid>
  );
};

export default MainPage;
