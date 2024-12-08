// import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import PromoOne from "../assets/promoOne.png";
import PromoTwo from "../assets/promoTwo.png";
import PromoThree from "../assets/promoThree.png";
const Promotional = () => {
  return (
    <>
      <Container className={"max-w-container flex py-[50px] lg:py-[100px] space-x-10"}>
        <div className="cursor-pointer">
          <Image imgSrc={PromoOne} />
        </div>
        <div className="space-y-8">
          <Image imgSrc={PromoTwo} className={'cursor-pointer'}/>
          <Image imgSrc={PromoThree} className={'cursor-pointer'}/>
        </div>
      </Container>
    </>
  );
};

export default Promotional;
