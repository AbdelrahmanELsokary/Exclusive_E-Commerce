import './App.css';
import { BrowserRouter, Route } from 'react-router';
import { Routes } from 'react-router';
import { PageLayout } from './components/layout/PageLayout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<p>klurf</p>} path="/" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
