import React from 'react'
import Container from "./Container";
import Flex from "./Flex";
import Text from "./Text";
import Image from "./Image";
import Badge from "./Badge";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { useDispatch } from 'react-redux';
import { addCart } from '../app/slices/cartSlice';

const Products = ({ imgSrc, title, price, badgeText, text3, text4, text5, item }) => {
  
  
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addCart({...item,quantity: 1}));
  }
  
  return (   
    <>
      <Container>
        <div className="w-full px-4">
          <div className="relative group overflow-y-hidden border">
            <Image imgSrc={imgSrc} className={"w-[300px] h-[300px]"} />
            <Badge text={badgeText} className={"absolute top-5 left-5"} />
            <div className="w-full h-[120px] py-5 px-5 duration-500 absolute bottom-[-150px] left-0 bg-white opacity-60 invisible group-hover:visible space-y-5 group-hover:bottom-0">
              <Flex className={"justify-end space-x-3 group-hover:visible"}>
                <p className="text-[#767676] hover:text-black hover:font-bold cursor-pointer">
                  Add to Wish List
                </p>
                <FaHeart />
              </Flex>
              <Flex className={"justify-end space-x-3 group-hover:visible"}>
                <p className="text-[#767676] hover:text-black hover:font-bold cursor-pointer">
                  Compare
                </p>
                <HiOutlineRefresh />
              </Flex>
              <Flex onClick={handleAddToCart} className={"justify-end space-x-3 group-hover:visible"}>
                <p className="text-[#767676] hover:text-black hover:font-bold cursor-pointer">
                  Add to Cart
                </p>
                <FaShoppingCart />
              </Flex>
            </div>
          </div>
          <div className="pt-5">
            <div className="flex justify-between">
              <Text as={"p"} text={text3} className={"font-bold text-xl"} />
              <Text
                as={"p"}
                text={text4}
                className={"text-[#767676] text-base"}
              />
            </div>
            <div className="pt-2">
              <Text
                as={"p"}
                text={text5}
                className={"text-[#767676] text-base"}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Products;


