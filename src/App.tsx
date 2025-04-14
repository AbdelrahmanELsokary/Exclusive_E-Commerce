import { PageLayout } from './components/layout/PageLayout';
import { BrowserRouter, Route } from 'react-router';
import Hero from './components/pages/home/Hero';
import { Login } from './components/auth/Login';
import SignUp from './components/auth/Signup';
import '../public/assets/styles/App.css';
import { Routes } from 'react-router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<Hero />} path="/" />
            <Route element={<p>Contact</p>} path="/Contact" />
            <Route element={<p>Contact</p>} path="/About" />
            <Route element={<SignUp />} path="/SignUp" />
            <Route element={<Login />} path="/Login" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
