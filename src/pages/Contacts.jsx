import Container from "../components/Container";
import Text from "../components/Text";
import { Link } from 'react-router-dom';

const Contacts = () => {
  return (
    <>
      <Container>
        <Text
          text={'Contacts'}
          as={'h3'}
          className={'text-5xl font-DM_Sans mt-10'}
        />
        <div className="">
          <Text
            text={'Fill up a Form'}
            as={'h3'}
            className={'text-[39px] font-DM_Sans font-bold mt-16'}
          />
        </div>
        <div className="w-[780px] flex-col flex space-y-2">
          <label
            htmlFor="name"
            className="text-[#262626] text-base font-bold font-DM_Sans mt-10"
          >
            Name
          </label>
          <input
            type="text"
            placeholder="Your Name here"
            className="text-[#767676] outline-none border-b pb-3"
          />
        </div>
        <div className="w-[780px] flex-col flex space-y-2">
          <label
            htmlFor="name"
            className="text-[#262626] text-base font-bold font-DM_Sans mt-10"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Your email here"
            className="text-[#767676] outline-none border-b pb-3"
          />
        </div>
        <div className="w-[780px] flex-col flex space-y-2">
          <label
            htmlFor="name"
            className="text-[#262626] text-base font-bold font-DM_Sans mt-10"
          >
            Message
          </label>
          <input
            type="text"
            placeholder="Your message here"
            className="text-[#767676] outline-none border-b pb-3"
          />
        </div>
        <Link to={'/'}>
          <button className="px-16 py-3 bg-black text-white font-bold mt-20">
            Post
          </button>
        </Link>
        <div className="mt-40">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.62426372665!2d90.32108107293853!3d23.810542905786974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2sMirpur%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1738142683038!5m2!1sen!2sbd"
            width="1600"
            height="572"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </Container>
    </>
  );
}

export default Contacts;
