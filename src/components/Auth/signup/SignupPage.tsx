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

const FormSection = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#2196f3',
  color: '#fff',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#2196f3',
  textDecoration: 'none',
}));

const SignupPage: React.FC = () => {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [hasNoMiddleName, setHasNoMiddleName] = useState(false);

  const [lastNameError, setLastNameError] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [middleNameError, setMiddleNameError] = useState('');
  const [mobilePhoneError, setMobilePhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
    setLastNameError('');
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
    setFirstNameError('');
  };

  const handleMiddleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMiddleName(event.target.value);
    setMiddleNameError('');
  };

  const handleMobilePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMobilePhone(event.target.value);
    setMobilePhoneError('');
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
    setConfirmPasswordError('');
  };

  const handleShowPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(event.target.checked);
  };

  const handleAcceptTermsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAcceptTerms(event.target.checked);
  };

  const handleHasNoMiddleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHasNoMiddleName(event.target.checked);
    setMiddleName('');
    setMiddleNameError('');
  };

  const validateFields = () => {
    let isValid = true;

    if (!lastName) {
      setLastNameError('Введите фамилию');
      isValid = false;
    }

    if (!firstName) {
      setFirstNameError('Введите имя');
      isValid = false;
    }

    if (!hasNoMiddleName && !middleName) {
      setMiddleNameError('Введите отчество');
      isValid = false;
    }

    if (!mobilePhone) {
      setMobilePhoneError('Введите мобильный телефон');
      isValid = false;
    }

    if (!email) {
      setEmailError('Введите электронную почту');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Введите пароль');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Пароли не совпадают');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateFields()) {
      // Handle form submission logic here
    }
  };

  return (
    <RootContainer component="main">
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <StyledLink href="/login" variant="body2">
          Войти
        </StyledLink>
      </Box>
      <FormSection>
        {/* <Typography component="p" variant="inherit">
          Создайте единый личный кабинет для получения услуг и электронных сервисов Москвы
        </Typography> */}
        <Typography variant="subtitle1">Личные данные</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Фамилия"
          name="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          error={!!lastNameError}
          helperText={lastNameError}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="Имя"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          error={!!firstNameError}
          helperText={firstNameError}
        />
        {!hasNoMiddleName && (
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="middleName"
            label="Отчество"
            name="middleName"
            value={middleName}
            onChange={handleMiddleNameChange}
            error={!!middleNameError}
            helperText={middleNameError}
          />
        )}
        <FormControlLabel
          control={
            <Checkbox
              checked={hasNoMiddleName}
              onChange={handleHasNoMiddleNameChange}
              color="primary"
            />
          }
          label="Нет отчества"
        />
      </FormSection>
      <FormSection>
        <Typography variant="subtitle1">Контактные данные</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="mobilePhone"
          label="Мобильный телефон"
          name="mobilePhone"
          value={mobilePhone}
          onChange={handleMobilePhoneChange}
          error={!!mobilePhoneError}
          helperText={mobilePhoneError}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Электронная почта"
          name="email"
          value={email}
          onChange={handleEmailChange}
          error={!!emailError}
          helperText={emailError}
        />
      </FormSection>
      <FormSection>
        <Typography variant="subtitle1">Безопасность</Typography>
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
          error={!!passwordError}
          helperText={passwordError}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Повторите пароль"
          type={showPassword ? 'text' : 'password'}
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={!!confirmPasswordError}
          helperText={confirmPasswordError}
        />
        <FormControlLabel
          control={
            <Checkbox checked={showPassword} onChange={handleShowPasswordChange} color="primary" />
          }
          label="Показать пароль"
        />
        <FormControlLabel
          control={
            <Checkbox checked={acceptTerms} onChange={handleAcceptTermsChange} color="primary" />
          }
          label="Я принимаю условия соглашения о пользовании информационными системами и ресурсами города Москвы"
        />
      </FormSection>
      <SubmitButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={
          !acceptTerms ||
          !!lastNameError ||
          !!firstNameError ||
          (!hasNoMiddleName && !!middleNameError) ||
          !!mobilePhoneError ||
          !!emailError ||
          !!passwordError ||
          !!confirmPasswordError
        }>
        Зарегистрироваться
      </SubmitButton>
    </RootContainer>
  );
};

export default SignupPage;
