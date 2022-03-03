import { Button, TextField } from '@mui/material';
import React from 'react';
import { MainLayout } from '../components/MainLayout';
import Link from 'next/link';

const Login = () => {
  return (
    <MainLayout title="Авторизация">
      <div className="auth">
        <h1>Авторизация</h1>
        <form>
          <TextField type="email" label="Email" variant="outlined" size="small" />
          <TextField type="password" label="Пароль" variant="outlined" size="small" />
          <Button type="submit" variant="contained">
            Войти
          </Button>
          <div className="foot">
            У вас не аккаунта?
            <Link href="/register">
              <a>
                <Button variant="text">Зарегистрируйтесь</Button>
              </a>
            </Link>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default Login;
