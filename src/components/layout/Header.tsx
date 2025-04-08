import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { IoSearch } from 'react-icons/io5';
import { MdMenu } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';
import { useState } from 'react';

export function Header() {
  const navLinks: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/Contact' },
    { name: 'About', path: '/About' },
    { name: 'Sign Up', path: '/Sign Up' },
  ];
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
    <>
      <header className=" sticky top-0 bg-inherit border-b border-[#00000036] z-10 py-5">
        <div className="container justify-around flex items-center gap-4 m-auto">
          <Link className="font-bold text-2xl tracking-[1px]" to={'/'}>
            Exclusive
          </Link>
          <nav>
            <ul className={`${isMenuOpen ? 'absolute right-0 top-23 w-[200px] rounded-[7px] bg-[#e3e3e3] p-4' : 'hidden'} md:flex md:items-center md:gap-6 `}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? 'border-b-1 border-b-gray-400' : '')}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <div className="search flex gap-6 bg-gray-100 rounded-[4px] py-[7px] pr-[12px] pl-[20px]">
              <input className="text-[12px] outline-0 w-[110%] " type="text" placeholder="What are you looking for?" />
              <IoSearch className="text-4xl" />
            </div>
            <div className="heart">
              <CiHeart className="text-2xl cursor-pointer" />
            </div>
            <div className="cart">
              <IoCartOutline className="text-2xl cursor-pointer" />
            </div>
            <FiUser className="w-[32px] h-[32px] text-white bg-[#DB4444] rounded-[50%] p-[6px] cursor-pointer" />
          </div>
          <button className="md:hidden" onClick={() => setisMenuOpen(!isMenuOpen)} type="button">
            <MdMenu className="text-3xl cursor-pointer" />
          </button>
        </div>
      </header>
    </>
  );
}
