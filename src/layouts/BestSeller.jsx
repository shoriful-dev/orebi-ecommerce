import React from "react";
import { useState, useEffect } from "react";
import Container from "../components/Container";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import SamplePrevArrow from "../components/SamplePrevArrow";
import SampleNextArrow from "../components/SampleNextArrow";
import Text from "../components/Text";
import Products from "../components/Products";
import axios from "axios";

const BestSeller = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  let [all, setAll] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=200");
        setAll(response.data.products); // Correctly extract products array
      } catch (error) {
        console.error("Error fetching data:", error); // Handle errors gracefully
      }
    }
    getData();
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
          {all.map((item, index) => (
            <Products
              item={item}
              key={index}
              imgSrc={item.images}
              badgeText={item.category}
              text3={item.title}
              text4={item.price}
              text5={item.rating.rate}
            />
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default BestSeller;

