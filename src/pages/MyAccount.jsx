import { Link } from "react-router-dom";
import Container from "../components/Container"


const MyAccount = () => {
  return (
    <>
      <Container>
        <div className="">
          <h3 className="text-5xl font-bold pt-20">My Account</h3>
        </div>
        <Link to={'Hello world'} className="helo workass" />
      </Container>
    </>
  );
}

export default MyAccount;

