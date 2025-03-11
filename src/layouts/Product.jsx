import { useState, useEffect } from 'react';
import Container from '../components/Container';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import SamplePrevArrow from '../components/SamplePrevArrow';
import SampleNextArrow from '../components/SampleNextArrow';
import Text from '../components/Text';
import Products from '../components/Products';
import axios from 'axios';

const Product = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let [all, setAll] = useState([]);
  useEffect(() => {
    async function getData() {
      let data = await axios.get('https://fakestoreapi.com/products');
      setAll(data.data);
    }
    getData();
  }, []);
  return (
    <>
      <Container>
        <Text
          text={'New Arrivals'}
          as={'h1'}
          className={'text-4xl font-bold mb-10'}
        />
        <Slider {...settings}>
          {all.map((item, index) => (
            <Products
              item={item}
              key={index}
              imgSrc={item.image}
              badgeText={item.category}
              text3={item.title.slice(0, 20)}
              text4={'$' + item.price}
              text5={'Rating: ' + ' ⭐ ' + item.rating.rate}
            />
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default Product;
