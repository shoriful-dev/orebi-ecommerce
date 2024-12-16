import React, { useState } from 'react'
import Text from '../components/Text';
import Flex from '../components/Flex';
import Container from '../components/Container';
import Image from '../components/Image';
import { MdOutlineChevronRight } from 'react-icons/md'
import { ImCross } from 'react-icons/im'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { FaCaretDown } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removeCart } from '../app/slices/cartSlice';


const Cart = () => {
    const cart = useSelector((state)=>state.cartSlice.cartProducts)
    const dispatch = useDispatch();
    const handleRemove = (id) => {
      dispatch(removeCart(id)); // Use the removeCart action from your cartSlice
  };

  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id));
  };
  
  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.id));
  };
    
  return (
    <>
    <div className="py-32">
        <Container>
            <Text as='h1' text={'Cart'} className='text-[49px] text-hoverheadeingC font-bold font-dm mb-4'/>
            <div className="mt-2 mb-32">
                <Flex className={'items-center'}>
                <Text as='h1' text={'Home'} className='text-headingC text-[12px] font-sans '/>
                <MdOutlineChevronRight className='text-headingC text-[12px] font-sans'/>
                <Text as='h1' text={'Cart'} className='text-headingC text-[12px] font-sans '/>
                </Flex>
            </div>
            <div className="mb-14">
                <div className="bg-Cartbg pl-4 py-9">
                    <Flex>
                        <Text as='h1' text={'Product'} className='pl-36 text-base font-bold font-dm text-hoverheadeingC'/>
                        <Text as='h1' text={'Price'} className='px-64 text-base font-bold font-dm text-hoverheadeingC'/>
                        <Text as='h1' text={'Quantity'} className='px-24 text-base font-bold font-dm text-hoverheadeingC'/>
                        <Text as='h1' text={'Total'} className='pl-36 text-base font-bold font-dm text-hoverheadeingC'/>
                    </Flex>
                </div>
                {
                    cart.map((item)=>(
                        <div className="py-6 pl-4 border border-border">
                            <Flex className={'items-center'}>
                                <Flex className={'items-center'}>
                                    <div className="">
                                    <ImCross className='my-10 cursor-pointer' onClick={() => handleRemove(item.id)}/>
                                    </div>
                                    <Image imgSrc={item.image} className={'pl-8 pr-4 w-56 h-40'}/>
                                    <Text as='h1' text={item.title.slice(0,18)} className='py-9 text-base font-bold font-dm text-hoverheadeingC'/>
                                </Flex>
                                <Text as='h1' text={`$${item.price}`} className='px-20 pr-[310px] text-xl font-bold font-dm text-hoverheadeingC'/>
                                <div className="py-2 px-4 border border-border mr-20">
                                    <Flex className={'items-center gap-x-9'}>
                                        <FiMinus className='text-base font-dm text-headingC' onClick={() => handleDecrement(item)}/>
                                        <Text as='h1' text={item.quantity} className='text-base font-dm text-headingC'/>
                                        <FiPlus className='text-base font-dm text-headingC' onClick={() => handleIncrement(item)}/>
                                    </Flex>
                                </div>
                                <Text as='h1' text={`$${item.price * item.quantity}`} className='px-24 text-xl font-bold font-dm text-hoverheadeingC'/>
                            </Flex>
                        </div>
                    ))
                }
                <div className="p-4 border border-border">
                    <Flex className={'justify-between items-center'}>
                        <Flex className={'items-center gap-x-5'}>
                            <div className="py-4 px-5 border border-border ">
                                <Flex className={'items-center gap-x-40'}>
                                    <Text as='h1' text={'SIZE'} className='text-base font-dm text-headingC'/> 
                                    <FaCaretDown />
                                </Flex>
                            </div>
                            <Text as='h1' text={'Apply coupon'} className='text-sm font-bold font-dm text-hoverheadeingC'/>
                        </Flex>
                        <Text as='h1' text={'Update cart'} className='text-sm font-bold font-dm text-hoverheadeingC'/>
                    </Flex>
                </div>
            </div>
            <div className="flex justify-end mb-7">
                <Text as='h1' text={'Cart totals'} className='text-xl font-bold font-dm text-hoverheadeingC'/>
            </div>
            <div className="flex justify-end mb-7">
                <div className="">
                    <Flex>
                        <div className="pl-5 py-5 border border-border">
                            <Text as='h1' text={'Subtotal'} className='pr-56 text-base font-bold font-dm text-hoverheadeingC' />
                        </div>
                        <div className="pl-5 py-5 border border-border">
                            <Text as='h1' text={'389.99 $'} className='pr-56 text-base font-dm text-headingC' />
                        </div>
                    </Flex>
                    <Flex>
                        <div className="pl-5 py-5 border border-border">
                            <Text as='h1' text={'Total'} className='pr-[252px] text-base font-bold font-dm text-hoverheadeingC' />
                        </div>
                        <div className="pl-5 py-5 border border-border">
                            <Text as='h1' text={'389.99 $'} className='pr-56 text-base font-dm text-headingC' />
                        </div>
                    </Flex>
                </div>
            </div>
            <div className="flex justify-end mb-7">
                <div className="py-4 px-5 bg-hoverheadeingC text-white">
                    <Text as='h1' text={'Proceed to checkout'} className='text-sm font-bold font-dm '/>
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}

export default Cart
