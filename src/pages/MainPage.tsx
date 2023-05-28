import React from 'react';
import { Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import BookingCalendar from '../components/places/calendar/BookingCalendar';
import FilterCategories from '../components/places/filter/FilterCategories';
import InformationBlock from '../components/places/info/InformationBlock';
import SearchBar from '../components/places/search/SearchBar';
import ControlledPagination from '../components/places/pagination/Pagination';

const StyledGrid = styled(Grid)(({ theme }) => ({
  background: 'linear-gradient(45deg, #3f51b5 30%, #212121 90%)',
  minHeight: '120vh',
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1300px',
  margin: '0 auto',
  padding: theme.spacing(3),
}));

const StyledSearchBar = styled(SearchBar)({
  width: '30%',
  margin: '50%',
});

const StyledInformationBlock = styled(InformationBlock)({
  width: '50%',
  height: '50%',
});

const MainPage = () => {
  return (
    <StyledGrid container spacing={3}>
      <Grid item xs={12}>
        <ContentContainer>
          <StyledSearchBar />
        </ContentContainer>
      </Grid>
      <Grid item xs={8}>
        <ContentContainer>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <StyledInformationBlock
                imageUrl={'111'}
                placeName={'Имя'}
                publishDate={'Дата'}
                description={'Описание'}
                onClick={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Grid>
            {/* Добавьте другие пары InformationBlock аналогичным образом */}
          </Grid>
        </ContentContainer>
        <ContentContainer>
          <ControlledPagination />
        </ContentContainer>
      </Grid>
      <Grid item xs={4}>
        <ContentContainer>
          <BookingCalendar />
        </ContentContainer>
        <ContentContainer>
          <FilterCategories />
        </ContentContainer>
      </Grid>
    </StyledGrid>
  );
};

export default MainPage;
