import './App.css';
import { BrowserRouter } from 'react-router';
import { Routes } from 'react-router';
import { PageLayout } from './components/layout/PageLayout';


// import PageLayout from './components/layout/Banner';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Banner /> */}
        <PageLayout />
        <Routes></Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
