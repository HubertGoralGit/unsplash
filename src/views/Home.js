import React from 'react';
import styled from 'styled-components';
import bgImage from '../assets/images/background.jpg';

const HomeWrapper = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const Home = () => {
  return <HomeWrapper></HomeWrapper>;
};

export default Home;
