import { AppBar, Container, Typography, Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './Header.module.scss';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export const Header = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className={styles.header}>
      <Container>
        <div className={styles.body}>
          <Link href="/">
            <a className={styles.logo}>CALMVEGETABLES</a>
          </Link>
          <ul className={styles.menu}>
            <li>
              <Link href="/cart">
                <a>
                  <LocalMallOutlinedIcon /> Корзина
                </a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>
                  <AccountCircleOutlinedIcon /> Войти
                </a>
              </Link>
            </li>
            <li className={styles.userMenuBtn} onClick={handleOpenUserMenu}>
              Username
            </li>
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Профиль</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Выйти</Typography>
              </MenuItem>
            </Menu>
          </ul>
        </div>
      </Container>
    </AppBar>
  );
};
