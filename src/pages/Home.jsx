import Banner from "../layouts/Banner";
import Promotional from "../layouts/Promotional";
import Product from "../layouts/Product";
import Ads from "../layouts/Ads";
import SpecialOffer from "../layouts/SpecialOffer";
import BestSeller from "../layouts/BestSeller";

const Home = () => {
  return (
    <>
      <Banner />
      <Promotional />
      <Product />
      <BestSeller />
      <Ads />
      <SpecialOffer />
    </>
  );
};

export default Home;
