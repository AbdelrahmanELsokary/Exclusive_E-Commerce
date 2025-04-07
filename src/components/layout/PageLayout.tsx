import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Banner } from './Banner';

export function PageLayout() {
  const [local, setLocal] = useState(localStorage.getItem('i18nextLng'));
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    switch (lang) {
      case 'en':
        setLocal('en');
        i18n.changeLanguage('en');
        break;
      case 'ar':
        setLocal('ar');
        i18n.changeLanguage('ar');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div dir={local === 'en' ? 'ltr' : 'rtl'}>
        {' '}
        {/* تصحيح اتجاه النص */}
        <Banner local={local} changeLanguage={changeLanguage} />
      </div>
    </>
  );
}
