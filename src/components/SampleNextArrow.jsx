// import React from 'react'
import { FaLongArrowAltLeft } from "react-icons/fa";
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} text-2xl text-white w-16 h-16 rounded-full bg-[#979797] items-center justify-center flex cursor-pointer absolute top-[120px]
      right-4 z-10`}
      onClick={onClick}
    ><FaLongArrowAltLeft className=""/></div>
  );
};

export default SamplePrevArrow;
