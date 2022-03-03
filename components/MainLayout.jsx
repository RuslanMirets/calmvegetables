import { Container } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { Header } from './Header';

export const MainLayout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title || 'CALMVEGETABLES - интернет-магазин'}</title>
        <meta name="description" content={`Онлайн магазин. ` + description} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || 'Магазин товаров'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Container>{children}</Container>
        </main>
      </div>
    </>
  );
};
