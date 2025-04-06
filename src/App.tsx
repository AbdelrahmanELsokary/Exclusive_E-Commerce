import './App.css';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';

import { Header } from './components/layout/Header';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Header />
    </>
  );
}

export default App;
