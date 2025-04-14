import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Header } from './Header';
import { useState } from 'react';
export function PageLayout() {
  const { i18n } = useTranslation();
  const [local, setLocal] = useState(localStorage.getItem('i18nextLng') || 'en');

  const changeLanguage = (lang: string) => {
    switch (lang) {
      case 'ar':
        setLocal('ar');
        i18n.changeLanguage('ar');
        break;
      default:
        setLocal('en');
        i18n.changeLanguage('en');
    }
  };

  return (
    <>
      <div dir={local === 'en' ? 'ltr' : 'rtl'}>
        <ToastContainer />
        <Banner local={local} changeLanguage={changeLanguage} />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
