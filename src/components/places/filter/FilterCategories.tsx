import React from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';

export const FilterCategories = () => {
  const categories = ["Студия звукозаписи", "Галерея", "Другое"];
  const showOptions = ["Сначала новые", "Сначала старые"];

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6">Вид площадки:</Typography>
      <ButtonGroup variant="outlined" color="primary" sx={{ mt: 1, mb: 2 }}>
        {categories.map((category, index) => (
          <Button key={index} sx={{ borderRadius: 2, ml: 1, mr: 1 }}>{category}</Button>
        ))}
      </ButtonGroup>

      <Typography variant="h6">Показывать:</Typography>
      <ButtonGroup variant="outlined" color="primary" sx={{ mt: 1 }}>
        {showOptions.map((option, index) => (
          <Button key={index} sx={{ borderRadius: 2, ml: 1, mr: 1 }}>{option}</Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default FilterCategories;
