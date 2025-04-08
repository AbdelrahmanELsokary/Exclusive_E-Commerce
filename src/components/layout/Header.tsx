import { IoCartOutline, IoSearch } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { LuShoppingBag } from 'react-icons/lu';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router';
import { FaRegStar } from 'react-icons/fa';
import { TbLogout2 } from 'react-icons/tb';
import { CiHeart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';

export function Header() {
  const { t } = useTranslation();
  const navLinks: { name: string; path: string }[] = [
    { name: t('Home'), path: '/' },
    { name: t('Contact'), path: '/Contact' },
    { name: t('About'), path: '/About' },
    { name: t('Sign Up'), path: '/SignUp' },
  ];
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <>
      <header className="sticky top-0 border-b border-[#00000036] z-10 py-5">
        <div className="container justify-around flex items-center gap-4 m-auto">
          <Link className="font-bold text-2xl tracking-[1px]" to={'/'}>
            {t('Exclusive')}
          </Link>
          <nav>
            <ul className={`${isMenuOpen ? 'absolute block right-0 top-23 max-lg:w-[200px] rounded-[7px] max-lg:bg-[#e3e3e3] p-4' : 'hidden'} lg:flex lg:static lg:items-center lg:gap-6 `}>
              {navLinks.map((link) => (
                <li className="max-lg:py-1" key={link.name}>
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? 'border-b-1 border-b-gray-400' : '')}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="search flex gap-6 bg-gray-100 rounded-[4px] py-[7px] pr-[12px] pl-[20px]">
              <input className="text-[12px] outline-0 w-[110%]" type="text" placeholder={t('What are you looking for?')} />
              <IoSearch className="text-4xl" />
            </div>
            <div className="heart">
              <CiHeart className="text-2xl cursor-pointer" />
            </div>
            <div className="cart">
              <IoCartOutline className="text-2xl cursor-pointer" />
            </div>
            <FiUser onClick={() => setAccount(!account)} className="w-[32px] h-[32px] text-white bg-[#DB4444] rounded-[50%] p-[6px] cursor-pointer" />
          </div>
          <button className="lg:hidden" onClick={() => setisMenuOpen(!isMenuOpen)} type="button">
            <MdMenu className="text-3xl cursor-pointer" />
          </button>
          <ul className={`${account ? 'text-white absolute right-0 top-23 max-w-[300px] rounded-[4px] bg-[#00000014] backdrop-blur-md px-4' : 'hidden'}`}>
            <li>
              <Link className="flex items-center gap-2 py-3" to={'/'}>
                <FiUser className="text-2xl" />
                {t('Manage My Account')}
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 py-3" to={'/'}>
                <LuShoppingBag className="text-2xl" />
                {t('My Order')}
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 py-3" to={'/'}>
                <IoIosCloseCircleOutline className="text-2xl" />
                {t('My Cancellations')}
              </Link>
            </li>
            <li>
              <Link className="flex items-center gap-2 py-3" to={'/'}>
                <FaRegStar className="text-2xl" />
                {t('My Reviews')}
              </Link>
            </li>
            <li>
              <button type="button" className="flex items-center gap-2 py-3">
                <TbLogout2 className="text-2xl" />
                {t('Logout')}
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
