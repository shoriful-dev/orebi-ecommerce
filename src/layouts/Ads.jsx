// import React from 'react'
import Image from "../components/Image"
import adsImage from "../assets/adsimage.png"
import Container from "../components/Container"

const Ads = () => {
  return (
    <div className="py-[100px]">
      <Container>
      <Image imgSrc={adsImage}/>
      </Container>
    </div>
  )
}

export default Ads
