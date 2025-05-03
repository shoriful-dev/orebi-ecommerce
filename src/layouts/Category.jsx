import { useRef, useState, useEffect } from 'react';
import { IoMenu } from 'react-icons/io5';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Container from '../components/Container';
import { Link } from 'react-router-dom';
import Search from '../components/Search';

const Category = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuTriggerRef = useRef(null);

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // Use effect to handle outside clicks
  useEffect(() => {
    const handleClickOutside = event => {
      // Check if the click is outside both the dropdown and the menu trigger
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuTriggerRef.current &&
        !menuTriggerRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  //? User Dropdown Part Start
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const userDropdownRef = useRef(null);
  const triggerRef = useRef(null);

  const handleUserDrop = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };
  const handleLogout = () => {
    setIsUserDropdownOpen(false);
    setIsCartDropdownOpen(false);
  };
  const handleMyAccount = () => {
    setIsUserDropdownOpen(false);
    setIsCartDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      // Check if the click is outside both the dropdown and the menu trigger
      if (
        userDropdownRef.current &&
        !userDropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount
  //? User Dropdown Part End
  //? Cart Dropdown Part Start
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const cartDropdownRef = useRef(null);
  const cartTriggerRef = useRef(null);

  const handleCartDrop = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      // Check if the click is outside both the dropdown and the menu trigger
      if (
        cartDropdownRef.current &&
        !cartDropdownRef.current.contains(event.target) &&
        cartTriggerRef.current &&
        !cartTriggerRef.current.contains(event.target)
      ) {
        setIsCartDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); 
  //? Cart Dropdown Part End
  return (
    <>
      <div className="category_part bg-categoryBg relative">
        <Container className="flex items-center justify-between px-2 sm:px-5 xl:px-0">
          <div
            ref={menuTriggerRef}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={toggleDropdown}
          >
            <IoMenu className="text-2xl" />
            <p>Shop by Category</p>
          </div>

          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="w-[265px] h-[300px] bg-black text-[#ffffffb9] absolute top-24 left-[213px] z-50"
            >
              <ul className="px-5" onClick={toggleDropdown}>
                <Link
                  to={'/about'}
                  className="flex items-center justify-between hover:text-white hover:font-bold hover:ml-2 duration-300"
                >
                  <li className="py-5">Accessories</li>
                </Link>
                <Link to={'/about'}>
                  <li className="py-4 hover:text-white hover:font-bold hover:ml-3 duration-300">
                    Furniture
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li className="py-4 hover:text-white hover:font-bold hover:ml-3 duration-300">
                    Electronics
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li className="py-4 hover:text-white hover:font-bold hover:ml-3 duration-300">
                    Clothes
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li className="py-4 hover:text-white hover:font-bold hover:ml-3 duration-300">
                    Accessories
                  </li>
                </Link>
                <Link to={'/about'}>
                  <li className="py-4 hover:text-white hover:font-bold hover:ml-3 duration-300">
                    Home Appliances
                  </li>
                </Link>
              </ul>
            </div>
          )}

          <Search />

          <div className="flex items-center relative">
            <div
              ref={triggerRef}
              className="flex items-center"
              onClick={handleUserDrop}
            >
              <FaUser className="mr-1 cursor-pointer" />
              <IoMdArrowDropdown className="mr-5 cursor-pointer" />
            </div>

            {isUserDropdownOpen && (
              <div
                ref={userDropdownRef}
                className="absolute top-full right-0 w-[200px] border bg-white shadow-lg mt-2 z-10"
              >
                <Link to={'/my-account'} onClick={handleMyAccount}>
                  <h3 className="text-center py-4 hover:bg-black hover:text-white duration-200 cursor-pointer">
                    My Account
                  </h3>
                </Link>
                <Link to={'/log-out'} onClick={handleLogout}>
                  <h3 className="text-center py-4 hover:bg-black hover:text-white duration-200 cursor-pointer">
                    Log Out
                  </h3>
                </Link>
              </div>
            )}
            <div className="relative">
              <Link to={'/cart'}>
                <div
                  ref={cartTriggerRef}
                  onClick={handleCartDrop}
                  className="cursor-pointer"
                >
                  <FaShoppingCart />
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Category;
