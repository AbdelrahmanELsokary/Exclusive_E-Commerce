import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';

export default function Sidebar() {
  const { t } = useTranslation();
  const sideLinks: { name: string; path: string }[] = [
    { name: t('Woman’s Fashion'), path: '/' },
    { name: t('Men’s Fashion'), path: '/' },
    { name: t('Woman’s Fashion'), path: '/' },
    { name: t('Electronics'), path: '/' },
    { name: t('Home & Lifestyle'), path: '/' },
    { name: t('Medicine'), path: '/' },
    { name: t('Sports & Outdoor'), path: '/' },
    { name: t('Baby’s & Toys'), path: '/' },
    { name: t('Groceries & Pets'), path: '/' },
    { name: t('Health & Beauty'), path: '/' },
  ];
  return (
    <>
      <aside className="border-r-2 border-[#00000022] ml-22">
        <ul className="pr-10">
          {sideLinks.map((link) => (
            <li key={link.name} className="my-5">
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
