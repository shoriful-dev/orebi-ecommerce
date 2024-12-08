// import React from 'react'
import { useState, useEffect } from "react";
import Container from "../components/Container";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import SamplePrevArrow from "../components/SamplePrevArrow";
import SampleNextArrow from "../components/SampleNextArrow";
import Text from "../components/Text";
import axios from "axios";
import Products from "../components/Products";

const Product = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  const [allProduct, setAllProduct] = useState([]);
  useEffect(() => {
    async function all() {
      let data = await axios.get("https://api.escuelajs.co/api/v1/products");
      setAllProduct(data.data);
    }
    all();
  }, []);
  return (
    <>
      <Container>
        <Text
          text={"New Arrivals"}
          as={"h1"}
          className={"text-4xl font-bold mb-10"}
        />
        <Slider {...settings}>
          {allProduct.map((item, index) => (
            <Products
              key={index}
              imgSrc={item.images[0]} 
              badgeText={"New"}
              text3={item.title}
              text4={item.price}
              text5={item.category.name}
            />
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Product;
