import '../public/assets/styles/App.css';
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import { PageLayout } from './components/layout/PageLayout';
import { SignUp } from './components/auth/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<p>home</p>} path="/" />
            <Route element={<p>Contact</p>} path="/Contact" />
            <Route element={<p>Contact</p>} path="/About" />
            <Route element={<SignUp />} path="/SignUp" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
