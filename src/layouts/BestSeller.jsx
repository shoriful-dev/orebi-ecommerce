// import React from 'react'
import Container from "../components/Container";
import Flex from "../components/Flex";
import Products from "../components/Products";
import Text from "../components/Text";
import BestOne from "../assets/bestOne.png";
import BestTwo from "../assets/bestTwo.png";
import BestThree from "../assets/bestThree.png";
import BestFour from "../assets/bestFour.png";

const BestSeller = () => {
  return (
    <>
      <Container className={'mt-[150px]'}>
        <Text text={"Best Sellers"} as={"h1"} className={"text-4xl font-bold mb-10"}/>
        <Flex>
          <Products
            imgSrc={BestOne}
            badgeText={"-10%"}
            text3={"Basic Crew Neck Tee"}
            text4={"$100"}
            text5={"Black"}
          />
          <Products
            imgSrc={BestTwo}
            badgeText={"New"}
            text3={"Basic Crew Neck Tee"}
            text4={"$100"}
            text5={"Black"}
          />
          <Products
            imgSrc={BestThree}
            badgeText={"New"}
            text3={"Basic Crew Neck Tee"}
            text4={"$100"}
            text5={"Black"}
          />
          <Products
            imgSrc={BestFour}
            badgeText={"New"}
            text3={"Basic Crew Neck Tee"}
            text4={"$100"}
            text5={"Black"}
          />
        </Flex>
      </Container>
    </>
  );
};

export default BestSeller;

