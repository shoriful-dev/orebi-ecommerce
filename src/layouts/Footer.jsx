import { Link } from 'react-router-dom';
import Container from '../components/Container';
import Text from '../components/Text';
import Image from '../components/Image';
import logo from '../assets/logo.png';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <div className="bg-[#f5f5f3] mt-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-container">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 px-5 lg:px-0">
            <div>
              <Text as="h2" className="font-bold text-base mt-10" text="MENU" />
              <Link to={'/'}>
                <Text as="h2" className="text-sm mt-5 font-DM_Sans" text="Home" />
              </Link>
              <Link to={'/shop'}>
                <Text as="h2" className="text-sm mt-2 font-DM_Sans" text="Shop" />
              </Link>
              <Link to={'/about'}>
                <Text as="h2" className="text-sm mt-2 font-DM_Sans" text="About" />
              </Link>
              <Link to={'/contacts'}>
                <Text as="h2" className="text-sm mt-2 font-DM_Sans" text="Contacts" />
              </Link>
              <Link to={'/journal'}>
                <Text as="h2" className="text-sm mt-2 font-DM_Sans" text="Journal" />
              </Link>
            </div>
            <div>
              <Text as="h2" className="font-bold text-base mt-10" text="SHOP" />
              <Text as="h2" className="text-sm mt-5" text="Category 1" />
              <Text as="h2" className="text-sm mt-2" text="Category 2" />
              <Text as="h2" className="text-sm mt-2" text="Category 3" />
              <Text as="h2" className="text-sm mt-2" text="Category 4" />
              <Text as="h2" className="text-sm mt-2" text="Category 5" />
            </div>
            <div>
              <Text as="h2" className="font-bold text-base mt-10" text="HELP" />
              <Text as="h2" className="text-sm mt-5" text="Privacy Policy" />
              <Text
                as="h2"
                className="text-sm mt-2"
                text="Terms & Conditions"
              />
              <Text as="h2" className="text-sm mt-2" text="Special E-shop" />
              <Text as="h2" className="text-sm mt-2" text="Shipping" />
              <Text as="h2" className="text-sm mt-2" text="Secure Payments" />
            </div>
          </div>
          <div className="mt-10">
            <Text
              as="h2"
              className="font-bold text-base"
              text="(052) 611-5711"
            />
            <Text
              as="h2"
              className="font-bold text-base mt-2"
              text="company@domain.com"
            />
            <Text
              as="h2"
              className="text-sm mt-3"
              text="575 Crescent Ave. Quakertown, PA 18951"
            />
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <Link to={'/'}>
              <Image imgSrc={logo} imgAlt="logo" className={'w-32'} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 pb-10">
          <div className="flex space-x-5">
            <FaFacebookF className="text-lg" />
            <FaLinkedinIn className="text-lg" />
            <GrInstagram className="text-lg" />
          </div>
          <div className="mt-5 md:mt-0 text-center md:text-left">
            <Text
              as="h2"
              className="text-sm"
              text="2020 Orebi Minimal eCommerce Figma Template by Adveits"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
