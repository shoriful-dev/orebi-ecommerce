// import React from 'react'
import Container from "../components/Container";
import Image from "../components/Image";
import mainLogo from '../assets/logo.png';
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Navber = () => {
  return (
    <>
      <Container
        className={"flex py-5 px-5 md:px-5 lg:px-5 xl:px-0 md:py-8 lg:py-10"}
      >
        <div className="logo pt-1">
          <Link to={"/"}>
            <Image imgSrc={mainLogo} imgAlt="logo" className={'w-auto'}/>
          </Link>
        </div>
        <div className="menu_bar w-full flex justify-end flex-auto sm:hidden">
          <IoMenu className="text-2xl" />
        </div>
        <div className="menu flex flex-auto justify-end">
          <ul className="flex sm:space-x-6 md:space-x-10 lg:space-x-14 xs:hidden md:block text-[#767676]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "font-bold text-black" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `${isActive ? "font-bold text-black" : ""}`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "font-bold text-black" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) =>
                `${isActive ? "font-bold text-black" : ""}`
              }
            >
              Contacts
            </NavLink>
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                `${isActive ? "font-bold text-black" : ""}`
              }
            >
              Journal
            </NavLink>
          </ul>
        </div>
      </Container>
    </>
  );
};

export default Navber;
