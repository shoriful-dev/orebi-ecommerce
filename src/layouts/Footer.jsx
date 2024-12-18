// import React from 'react'

import { Link } from "react-router-dom"
import Container from "../components/Container"
import Text from "../components/Text"
import Image from "../components/Image";
import logo from "../assets/logo.png";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
    <div className="bg-[#f5f5f3] mt-32">
    <Container>
    <div className="grid grid-cols-3 max-w-container space-x-36">
      <div className="w-[600px] grid grid-cols-3">
        <div className="">
          <Text as="h2" className="font-bold text-base mt-10" text="MENU"/>
          <Link to={"/"}>
          <Text as="h2" className="text-sm mt-5" text="Home"/>
          </Link>
          <Link to={"/shop"}>
          <Text as="h2" className="text-sm mt-2" text="Shop"/>
          </Link>
          <Link to={"/about"}>
          <Text as="h2" className="text-sm mt-2" text="About"/>
          </Link>
          <Link to={"/contacts"}>
          <Text as="h2" className="text-sm mt-2" text="Contacts"/>
          </Link>
          <Link to={"/journal"}>
          <Text as="h2" className="text-sm mt-2" text="Journal"/>
          </Link>
        </div>
        <div className="">
          <Text as="h2" className="font-bold text-base mt-10" text="SHOP"/>
          <Text as="h2" className="text-sm mt-5" text="Category 1"/>
          <Text as="h2" className="text-sm mt-2" text="Category 2"/>
          <Text as="h2" className="text-sm mt-2" text="Category 3"/>
          <Text as="h2" className="text-sm mt-2" text="Category 4"/>
          <Text as="h2" className="text-sm mt-2" text="Category 5"/>
        </div>
        <div className="">
          <Text as="h2" className="font-bold text-base mt-10" text="HELP"/>
          <Text as="h2" className="text-sm mt-5" text="Privacy Policy"/>
          <Text as="h2" className="text-sm mt-2" text="Terms & Conditions"/>
          <Text as="h2" className="text-sm mt-2" text="Special E-shop"/>
          <Text as="h2" className="text-sm mt-2" text="Shipping"/>
          <Text as="h2" className="text-sm mt-2" text="Secure Payments"/>
        </div>
      </div>
      <div className="">
        <Text as="h2" className="font-bold text-base mt-10" text="(052) 611-5711"/>
        <Text as="h2" className="font-bold text-base mt-2" text="company@domain.com"/>
        <Text as="h2" className="text-sm mt-3" text="575 Crescent Ave. Quakertown, PA 18951"/>
      </div>
      <div className="pt-10">
      <Link to={"/"}>
            <Image imgSrc={logo} imgAlt="logo" className={'w-[122px] h-[29px]'}/>
      </Link>
      </div>
    </div>
    <div className="flex justify-between">
    <div className="flex space-x-10 mt-10 pb-10">
    <FaFacebookSquare />
    <FaLinkedin />
    <GrInstagram />
    </div>
    <div className="">
    <Text as="h2" className="text-sm mt-5" text="2020 Orebi Minimal eCommerce Figma Template by Adveits"/>
    </div>
    </div>
    </Container>
    </div>
    </>
  )
}

export default Footer
