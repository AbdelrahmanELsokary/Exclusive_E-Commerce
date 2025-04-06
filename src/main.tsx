import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import { Header } from './components/layout/Header.tsx';
import { Routes } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      {/* <App /> */}
      <Routes></Routes>
    </BrowserRouter>
  </StrictMode>
);
