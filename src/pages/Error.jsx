// import React from 'react'

import { IoSearch } from "react-icons/io5";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Container>
        <h2 className="font-bold text-[200px] mt-10">404</h2>
        <p className="text-[#767676] w-[644px] leading-8 mt-10">
          The page you were looking for couldnt be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>
        <div className="items-center relative py-10 inline-block">
          <input
            type="text"
            placeholder="Type to search"
            className="w-[150px] sm:w-[200px] md:w-[400px] lg:w-[600px] h-12 px-3 py-2 border bg-white text-placeHolderTC"
          />
          <IoSearch className="absolute right-5 top-1/2 cursor-pointer mt-[-8px]" />
        </div>
        <div className="">
          <Link to={"/"}>
            <button className="mt-5 px-10 py-3 bg-black text-white">
              Back to Home
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Error;
