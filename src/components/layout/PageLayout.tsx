import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from './Banner';
import { Outlet } from 'react-router';
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
        <Banner local={local} changeLanguage={changeLanguage} />
        <Outlet />
      </div>
    </>
  );
}
