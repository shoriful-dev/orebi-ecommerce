// import React from 'react'

import Container from "../components/Container"
import Text from "../components/Text";

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
            className={'text-2xl font-DM_Sans mt-10'}
          />
        </div>
      </Container>
    </>
  );
}

export default Contacts
