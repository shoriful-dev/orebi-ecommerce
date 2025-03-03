import Container from "../components/Container";
import Image from "../components/Image";
import mainLogo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ImCross } from 'react-icons/im';
import { useState } from "react";

const Navber = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  }
  return (
    <>
      <Container className="flex py-5 px-5 md:px-5 lg:px-5 xl:px-0 md:py-8 lg:py-10 items-center justify-between">
        <div className="logo pt-1">
          <Link to={'/'}>
            <Image imgSrc={mainLogo} imgAlt="logo" className="w-auto" />
          </Link>
        </div>
        <div onClick={handleShow} className="menu_bar flex sm:hidden">
          {show ? (
            <ImCross className="flex items-center mt-1" />
          ) : (
            <IoMenu className="text-2xl" />
          )}
        </div>
        <div className="menu hidden sm:flex flex-auto justify-end">
          <ul className="flex space-x-6 md:space-x-10 lg:space-x-14 text-[#767676]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? 'font-bold text-black' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `${isActive ? 'font-bold text-black' : ''}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? 'font-bold text-black' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `${isActive ? 'font-bold text-black' : ''}`
              }
            >
              Contacts
            </NavLink>
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                `${isActive ? 'font-bold text-black' : ''}`
              }
            >
              Journal
            </NavLink>
          </ul>
        </div>
      </Container>
      {show && (
        <div>
          <ul className="flex flex-col space-y-2 justify-center items-center bg-gray-200 text-black font-bold font-DM_Sans">
            <Link to={'/'}>
              <li className="hover:bg-gray-400 w-full text-center py-2 duration-300 transition-transform">
                Home
              </li>
            </Link>
            <li className="hover:bg-gray-400 w-full text-center py-2 duration-300 transition-transform">
              Shop
            </li>
            <li className="hover:bg-gray-400 w-full text-center py-2 duration-300 transition-transform">
              About
            </li>
            <li className="hover:bg-gray-400 w-full text-center py-2 duration-300 transition-transform">
              Contacts
            </li>
            <li className="hover:bg-gray-400 w-full text-center py-2 duration-300 transition-transform">
              Journal
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navber;
