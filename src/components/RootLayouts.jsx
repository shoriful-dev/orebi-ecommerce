// import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../layouts/Footer";
import HeaderPart from "./HeaderPart";

const RootLayouts = () => {
  return (
    <>
      <HeaderPart />
        <Outlet />
      <Footer />
    </>
  );
};

export default RootLayouts;
