import React from 'react';
import { Box, Button, IconButton, Container } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'linear-gradient(45deg, #3a6186, #89253e)',
        color: 'white',
        height: '100vh',
      }}>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="space-between" alignItems="center" p={2}>
          <Box display="flex" gap={2}>
            <a href="#">
              <Button sx={{ color: 'white' }}>1</Button>
            </a>
            <a href="#">
              <Button sx={{ color: 'white' }}>2</Button>
            </a>
            <a href="#">
              <Button sx={{ color: 'white' }}>3</Button>
            </a>
            <a href="#">
              <Button sx={{ color: 'white' }}>Места</Button>
            </a>
            <a href="#">
              <IconButton sx={{ color: 'white' }}>
                <TelegramIcon />
              </IconButton>
            </a>
            <a href="#">
              <IconButton sx={{ color: 'white' }}>
                <img src="vk_icon_url" alt="VK" />
              </IconButton>
            </a>
          </Box>
          <a href="#">
            <Button sx={{ backgroundColor: 'red', color: 'white' }}>Войти</Button>
          </a>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
