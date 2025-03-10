import { Link } from 'react-router-dom';
import Container from './../components/Container';

const Checkout = () => {
  return (
    <>
      <Container>
        <div className="">
          <h3 className="text-5xl font-bold mt-24">Checkout</h3>
        </div>
        <div className="">
          <p className="text-base mt-28">
            <span className="text-gray-400">Have a coupon?</span> Click here to
            enter your code
          </p>
          <input
            type="text"
            className="py-2 w-[1008px] border-b outline-none"
          />
        </div>

        <div className="">
          <h3 className="text-4xl font-bold mt-20">Billing Details</h3>
        </div>

        <div className="flex gap-2">
          <div className="mt-10">
            <label className="block font-bold pb-2" htmlFor="">
              First Name <sup className="font-bold">*</sup>
            </label>
            <input
              type="text"
              placeholder="First Name"
              className="text-sm w-[500px] py-2 px-2 border-b outline-none"
            />
          </div>
          <div className="mt-10">
            <label className="block font-bold pb-2" htmlFor="">
              Last Name <sup className="font-bold">*</sup>
            </label>
            <input
              type="text"
              placeholder="Last Name"
              className="text-sm w-[500px] py-2 px-2 border-b outline-none"
            />
          </div>
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            Companye Name (optional)<sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            className="text-sm w-[1008px] py-2 px-2 border-b outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            Country <sup className="font-bold">*</sup>
          </label>
          <select
            name="text"
            id="text"
            className="text-sm w-[1008px] py-2 px-2 border-b"
          >
            <option value="text">Pleace Select</option>
            <option value="text">Bangladesh</option>
            <option value="text">India</option>
            <option value="text">Nepal</option>
            <option value="text">Canada</option>
            <option value="text">England</option>
          </select>
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            Street Address <sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            placeholder="House number and street name"
            className="text-sm w-[1008px] py-2 px-2 border-b outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            Town/City <sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            placeholder="Town/City"
            className="text-sm w-[1008px] py-2 px-2 border-b outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            County (optional) <sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            placeholder="County"
            className="text-sm w-[1008px] py-2 px-2 border-b outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            Post Code <sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            placeholder="Post Code"
            className="text-sm w-[1008px] py-2 px-2 border-b outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            Phone <sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            placeholder="Phone"
            className="text-sm w-[1008px] py-2 px-2 border-b outline-none"
          />
        </div>

        <div className="mt-5">
          <label className="block font-bold pb-2" htmlFor="">
            Email Address <sup className="font-bold">*</sup>
          </label>
          <input
            type="text"
            placeholder="Email Address"
            className="text-sm w-[1008px] py-2 px-2 border-b outline-none"
          />
        </div>

        <div className="">
          <h3 className="mt-40 text-[40px] font-bold">
            Additional Information
          </h3>
          <p className="font-bold pt-10">Other Notes (optional)</p>
          <input
            className="mt-5 border-b w-[400px] outline-none"
            type="text"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
        <Link to={'/'}>
          <button className="px-7 py-3 bg-black text-white mt-20">
            Proceed to Bank
          </button>
        </Link>
      </Container>
    </>
  );
};

export default Checkout;
