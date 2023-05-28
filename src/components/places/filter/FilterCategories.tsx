import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Typography } from '@mui/material';

export const FilterCategories = () => {
  const categories = ["Студия звукозаписи", "Галерея", "Другое"];
  const showOptions = ["Сначала новые", "Сначала старые"];

  const [activeButton, setActiveButton] = useState(-1); // Индекс активной кнопки (-1 означает, что ни одна кнопка не активна)
                // @ts-ignore

  const handleCategoryClick = (index) => {
    setActiveButton(index); // Устанавливаем индекс активной кнопки
  };
                // @ts-ignore

  const handleShowOptionClick = (index) => {
    setActiveButton(index); // Устанавливаем индекс активной кнопки
  };

  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h6">Вид площадки:</Typography>
      <ButtonGroup variant="outlined" color="primary" sx={{ mt: 1, mb: 2 }}>
        {categories.map((category, index) => (
          <Button
            key={index}
            sx={{
              borderRadius: 2,
              ml: 1,
              mr: 1,
              backgroundColor: activeButton === index ? '#2196f3' : 'transparent', // Изменение цвета фона кнопки при активном состоянии
              color: '#fff', // Шрифт всегда белый
            }}
            onClick={() => handleCategoryClick(index)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      <Typography variant="h6">Показывать:</Typography>
      <ButtonGroup variant="outlined" color="primary" sx={{ mt: 1 }}>
        {showOptions.map((option, index) => (
          <Button
            key={index}
            sx={{
              borderRadius: 2,
              ml: 1,
              mr: 1,
              backgroundColor: activeButton === index ? '#2196f3' : 'transparent', // Изменение цвета фона кнопки при активном состоянии
              color: '#fff', // Шрифт всегда белый
            }}
            onClick={() => handleShowOptionClick(index)}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default FilterCategories;
