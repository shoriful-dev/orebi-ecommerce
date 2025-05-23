// import React from "react";
import Image from "../components/Image";
import BannerImage from "../assets/bannerBg.png";
import BannerImages from "../assets/bannerImages.png";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import Flex from './../components/Flex';
const Banner = () => {
  var settings  = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows:false,
    autoplay: true,
    speed: 1000,
  };
  return (
    <>
    <Slider {...settings}>
      <Flex className={"w-full -z-20"}>
      <Image imgSrc={BannerImage}/>
      </Flex>
      <Flex className={"w-full "}>
      <Image imgSrc={BannerImage}/>
      </Flex>
      <Flex className={"w-full "}>
      <Image imgSrc={BannerImage}/>
      </Flex>
    </Slider>
    <div className="">
      <Image imgSrc={BannerImages}/>
    </div>
    </>
  );
};

export default Banner;
