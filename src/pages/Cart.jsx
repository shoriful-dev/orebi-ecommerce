import { useState, useEffect, useRef } from 'react';
import Text from '../components/Text';
import Flex from '../components/Flex';
import Container from '../components/Container';
import Image from '../components/Image';
import { MdOutlineChevronRight } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaCaretDown, FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeCart,
} from '../app/slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cartSlice.cartProducts);
  const dispatch = useDispatch();

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  // Recalculate subtotal and total whenever cart changes
  useEffect(() => {
    const calculatedSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal);
  }, [cart]);

  const handleRemove = id => {
    dispatch(removeCart(id));
  };

  const handleIncrement = item => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = item => {
    if (item.quantity > 1) {
      dispatch(decrementQuantity(item.id));
    }
  };

  const cn = (...classes) => classes.filter(Boolean).join(' ');

  const SizeDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const dropdownRef = useRef(null);

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    const toggleDropdown = () => setIsOpen(prev => !prev);

    const toggleSize = size => {
      setSelectedSizes(prev =>
        prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
      );
    };

    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = event => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    return (
      <div className="relative" ref={dropdownRef}>
        <div
          className="py-4 px-5 border border-border cursor-pointer"
          onClick={toggleDropdown}
        >
          <Flex className="items-center gap-x-40">
            <Text
              as="h1"
              text={
                selectedSizes.length > 0
                  ? `SIZE (${selectedSizes.join(', ')})`
                  : 'SIZE'
              }
              className="text-base font-dm text-headingC"
            />
            <FaCaretDown
              className={cn(
                'transition-transform duration-300',
                isOpen ? 'rotate-180' : ''
              )}
            />
          </Flex>
        </div>

        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 z-10 bg-white border border-border shadow-lg">
            <div className="grid grid-cols-3 gap-2 p-4">
              {sizes.map(size => (
                <div
                  key={size}
                  className={cn(
                    'flex items-center justify-between p-2 cursor-pointer border',
                    selectedSizes.includes(size)
                      ? 'bg-primary text-white border-primary'
                      : 'border-border'
                  )}
                  onClick={() => toggleSize(size)}
                >
                  <span className="text-sm">{size}</span>
                  {selectedSizes.includes(size) && (
                    <FaCheck className="w-4 h-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="py-32">
      <Container>
        <Text
          as="h1"
          text="Cart"
          className="text-[49px] text-hoverheadeingC font-bold font-dm mb-4"
        />
        <div className="mt-2 mb-32">
          <Flex className="items-center">
            <Text
              as="h1"
              text="Home"
              className="text-headingC text-[12px] font-sans"
            />
            <MdOutlineChevronRight className="text-headingC text-[12px]" />
            <Text
              as="h1"
              text="Cart"
              className="text-headingC text-[12px] font-sans"
            />
          </Flex>
        </div>
        <div className="mb-14">
          <div className="bg-Cartbg pl-4 py-9">
            <Flex>
              <Text
                as="h1"
                text="Product"
                className="pl-36 text-base font-bold font-dm text-hoverheadeingC"
              />
              <Text
                as="h1"
                text="Price"
                className="px-64 text-base font-bold font-dm text-hoverheadeingC"
              />
              <Text
                as="h1"
                text="Quantity"
                className="px-24 text-base font-bold font-dm text-hoverheadeingC"
              />
              <Text
                as="h1"
                text="Total"
                className="pl-36 text-base font-bold font-dm text-hoverheadeingC"
              />
            </Flex>
          </div>
          {cart.map(item => (
            <div key={item.id} className="py-6 pl-4 border border-border">
              <Flex className="items-center">
                <Flex className="items-center">
                  <ImCross
                    className="my-10 cursor-pointer"
                    onClick={() => handleRemove(item.id)}
                  />
                  <Image imgSrc={item.image} className="pl-8 pr-4 w-52 h-40" />
                  <Text
                    as="h1"
                    text={item.title.slice(0, 18)}
                    className="py-9 text-base font-bold font-dm text-hoverheadeingC"
                  />
                </Flex>
                <Text
                  as="h1"
                  text={`$${item.price}`}
                  className="px-20 pr-[310px] text-xl font-bold font-dm text-hoverheadeingC"
                />
                <div className="py-2 px-4 border border-border mr-20">
                  <Flex className="items-center gap-x-9">
                    <FiMinus
                      className="text-base font-dm text-headingC cursor-pointer"
                      onClick={() => handleDecrement(item)}
                    />
                    <Text
                      as="h1"
                      text={item.quantity}
                      className="text-base font-dm text-headingC"
                    />
                    <FiPlus
                      className="text-base font-dm text-headingC cursor-pointer"
                      onClick={() => handleIncrement(item)}
                    />
                  </Flex>
                </div>
                <Text
                  as="h1"
                  text={`$${item.price * item.quantity}`}
                  className="px-24 text-xl font-bold font-dm text-hoverheadeingC"
                />
              </Flex>
            </div>
          ))}
          <div className="p-4 border border-border">
            <Flex className="justify-between items-center">
              <Flex className="items-center gap-x-5">
                <SizeDropdown />
                <Text
                  as="h1"
                  text="Apply coupon"
                  className="text-sm font-bold font-dm text-hoverheadeingC"
                />
              </Flex>
              <button
                onClick={() => {
                  // Handle additional logic for "Update Cart" if needed
                }}
                className="text-sm font-bold font-dm text-hoverheadeingC"
              >
                Update cart
              </button>
            </Flex>
          </div>
        </div>
        <div className="flex justify-end mb-7">
          <Text
            as="h1"
            text="Cart totals"
            className="text-xl font-bold font-dm text-hoverheadeingC"
          />
        </div>
        <div className="flex justify-end mb-7">
          <div>
            <Flex>
              <div className="pl-5 py-5 border border-border">
                <Text
                  as="h1"
                  text="Subtotal"
                  className="pr-56 text-base font-bold font-dm text-hoverheadeingC"
                />
              </div>
              <div className="pl-5 py-5 border border-border">
                <Text
                  as="h1"
                  text={`$${subtotal.toFixed(2)}`}
                  className="pr-56 text-base font-dm text-headingC"
                />
              </div>
            </Flex>
            <Flex>
              <div className="pl-5 py-5 border border-border">
                <Text
                  as="h1"
                  text="Total"
                  className="pr-[252px] text-base font-bold font-dm text-hoverheadeingC"
                />
              </div>
              <div className="pl-5 py-5 border border-border">
                <Text
                  as="h1"
                  text={`$${total.toFixed(2)}`}
                  className="pr-56 text-base font-dm text-headingC"
                />
              </div>
            </Flex>
          </div>
        </div>
        <div className="flex justify-end mb-7">
          <div className="py-4 px-5 border bg-hoverheadeingC text-white bg-black hover:scale-110 transition-all duration-300 cursor-pointer">
            <Link to={'/checkout'}>
              <Text
                as="h1"
                text="Proceed to checkout"
                className="text-sm font-bold font-dm"
              />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
