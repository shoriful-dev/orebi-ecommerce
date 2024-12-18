// import React from 'react'

import Container from "../components/Container"
import Image from "../components/Image"
import AboutOne from "../assets/aboutOne.png"
import AboutTwo from "../assets/aboutTwo.png"


const About = () => {
  return (
    <>
      <Container>
        <h2 className="font-bold text-[50px] mt-10">About</h2>
        <div className="flex space-x-10 mt-[200px]">
          <Image imgSrc={AboutOne}/>
          <Image imgSrc={AboutTwo}/>
        </div>
        <div className="w-[1600px] h-[105px] text-[#767676] text-[40px]">
          <p className="mt-16 leading-[50px]">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
        </div>
        <div className="max-w-container grid grid-cols-3 py-[50px]">
          <div className="">
            <h2 className="font-bold text-[25px] mt-10">Our Vision</h2>
            <p className="text-[#767676] w-[431px] leading-6 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="">
            <h2 className="font-bold text-[25px] mt-10">Our Story</h2>
            <p className="text-[#767676] w-[431px] leading-6 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>
          <div className="">
            <h2 className="font-bold text-[25px] mt-10">Our Brands</h2>
            <p className="text-[#767676] w-[431px] leading-6 mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>  
        </div>
      </Container>
    </>
  )
}

export default About
