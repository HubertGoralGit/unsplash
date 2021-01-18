import React from 'react';
import styled from 'styled-components';
import bgImage from '../assets/images/background.jpg';
import Search from '../components/Search/Search';

const HomeWrapper = styled.div`
  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Search />
    </HomeWrapper>
  );
};

export default Home;
