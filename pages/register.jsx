import { Button, TextField } from '@mui/material';
import React from 'react';
import { MainLayout } from '../components/MainLayout';
import Link from 'next/link';

const Register = () => {
  return (
    <MainLayout title="Авторизация">
      <div className="auth">
        <h1>Регистрация</h1>
        <form>
          <TextField type="text" label="Имя" variant="outlined" size="small" />
          <TextField type="email" label="Email" variant="outlined" size="small" />
          <TextField type="password" label="Пароль" variant="outlined" size="small" />
          <Button type="submit" variant="contained">
            Зарегистрироваться
          </Button>
          <div className="foot">
            У есть аккаунт?
            <Link href="/login">
              <a>
                <Button variant="text">Войти</Button>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Register;
