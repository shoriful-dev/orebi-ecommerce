// import React from 'react'
import { useState, useEffect } from "react";
import Container from "../components/Container";
import axios from "axios";
import Product from "../components/Products";

const ProductList = () => {
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
          {allProduct.map((item, index) => (
            <Product
              key={index}
              imgSrc={item.images[0]} 
              badgeText={"New"}
              text3={item.title}
              text4={item.price}
              text5={item.category.name}
            />
          ))}
      </Container>
    </>
  );
};

export default ProductList;
