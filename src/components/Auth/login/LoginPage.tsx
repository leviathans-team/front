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
import axios from 'axios';

const RootContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  maxWidth: '480px',
  margin: '0 auto',
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
  alignSelf: 'flex-start',
  marginTop: theme.spacing(1),
}));

const LoginPage: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://37.18.110.184:3000/auth/login', {
        login: emailOrPhone,
        password: password,
      });

      if (response.status === 200) {
        console.log('IsLogin');
        // Здесь вы можете добавить дополнительную логику для обработки успешного входа в систему
      } else {
        // Обработка ошибок входа в систему
        console.error('Login failed');
      }
    } catch (error) {
      // Обработка ошибок сети или сервера
      console.error('Network or server error');
    }
  };

  const handleEmailOrPhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailOrPhone(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };

  return (
    <RootContainer component="main">
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
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
				<Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
					<StyledLink href="/signup" variant="body2">
	          Зарегистрироваться
	        </StyledLink>
					<StyledLink href="/signupbusiness" variant="body2">
	          Зарегистрироваться как арендодатель
	        </StyledLink>
				</Box>
      </Form>
    </RootContainer>
  );
};

export default LoginPage;
