import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

interface BannerProps {
  local: string;
  changeLanguage: (lang: string) => void;
}

export function Banner({ local, changeLanguage }: BannerProps) {
  const { t } = useTranslation();
  return (
    <>
      <div className="banner bg-black text-white text-[14px]">
        <div className="container flex flex-wrap justify-center items-center h-[48px]">
          <p> {t('Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!')}</p>
          <Link to="/" className="font-semibold pl-2">
            {t('shopNow')}
          </Link>
          <select value={local} onChange={(e) => changeLanguage(e.target.value)} className="bg-black outline-none cursor-pointer px-6">
            <option value="en">English</option>
            <option value="ar">{local === 'en' ? 'Arabic' : 'العربية'}</option>
          </select>
        </div>
      </div>
    </>
  );
}
