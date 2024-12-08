// import React from 'react'
import Container from "../components/Container";
import Products from "../components/Products";
import Text from "../components/Text";
import OfferOne from "../assets/Offerone.png";
import OfferTwo from "../assets/Offertwo.png";
import OfferThree from "../assets/Offerthree.png";
import OfferFour from "../assets/Offerfour.png";
import Flex from "../components/Flex";

const SpecialOffer = () => {
  return (
    <>
      <Container className={"mt-[50px]"}>
        <Text
          text={"Special Offer"}
          as={"h1"}
          className={"text-4xl font-bold mb-10"}
        />
        <Flex>
          <Products
            imgSrc={OfferOne}
            badgeText={"-10%"}
            text3={"Basic Crew Neck Tee"}
            text4={"$100"}
            text5={"Black"}
          />
          <Products
            imgSrc={OfferTwo}
            badgeText={"New"}
            text3={"Basic Crew Neck Tee"}
            text4={"$100"}
            text5={"Black"}
          />
          <Products
            imgSrc={OfferThree}
            badgeText={"New"}
            text3={"Basic Crew Neck Tee"}
            text4={"$100"}
            text5={"Black"}
          />
          <Products
            imgSrc={OfferFour}
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

export default SpecialOffer;
