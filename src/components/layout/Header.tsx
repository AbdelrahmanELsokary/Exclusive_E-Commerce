import { IoCartOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router';
import { IoSearch } from 'react-icons/io5';
import { CiHeart } from 'react-icons/ci';
import { FiUser } from 'react-icons/fi';

export function Header() {
  const navLinks: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/Contact' },
    { name: 'About', path: '/About' },
    { name: 'Sign Up', path: '/Sign Up' },
  ];
  return (
    <>
      <header className=" sticky top-0 bg-inherit border-b border-[#00000036] z-10 py-5">
        <div className="container justify-around flex items-center gap-4 m-auto">
          <Link className="font-bold text-2xl tracking-[1px]" to={'/'}>
            Exclusive
          </Link>
          <nav>
            <ul className="md:flex md:items-center md:gap-6 ">
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
            <div className="search flex gap-2.5 bg-gray-100 py-[7px] pr-[12px] pl-[20px]">
              <input className="text-[12px] outline-0" type="text" placeholder="What are you looking for?" />
              <IoSearch className=" text-2xl" />
            </div>
            <div className="heart">
              <CiHeart className="text-2xl" />
            </div>
            <div className="cart">
              <IoCartOutline className="text-2xl" />
            </div>
            <FiUser className="w-[32px] h-[32px] text-white bg-[#DB4444] rounded-[50%] p-[6px]" />
          </div>
        </div>
      </header>
    </>
  );
}
