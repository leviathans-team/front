import React, { useState, ChangeEvent, FormEvent } from 'react';
import { styled } from '@mui/system';
import {
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Box,
} from '@mui/material';

const RootContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  maxWidth: '480px', // Ширина формы
  margin: '0 auto', // Центрирование формы
}));

const Form = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#2196f3',
  color: '#fff',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#2196f3',
  textDecoration: 'none',
  alignSelf: 'flex-start', // Выравнивание ссылки слева
  marginTop: theme.spacing(1), // Отступ сверху
}));

const LoginPage: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailOrPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <RootContainer component="main">
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <StyledLink href="#" variant="body2">
          Зарегистрироваться
        </StyledLink>
      </Box>
      <Form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="emailOrPhone"
          label="Телефон или электронная почта"
          name="emailOrPhone"
          value={emailOrPhone}
          onChange={handleEmailOrPhoneChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Пароль"
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <FormControlLabel
          control={
            <Checkbox checked={showPassword} onChange={handleShowPasswordChange} color="primary" />
          }
          label="Показать пароль"
        />
        <SubmitButton type="submit" fullWidth variant="contained">
          Войти
        </SubmitButton>
      </Form>
    </RootContainer>
  );
};

export default LoginPage;
