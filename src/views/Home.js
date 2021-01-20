import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState({ hits: [] });
  const clientId = 'gT1WuxqKFaV21yLTOZaqBrwhSp_beHF4PWyE_eEaAa0';

  const handleSubmit = () => {
    const url =
      'https://api.unsplash.com/search/photos?page=1&query=' +
      inputValue +
      '&client_id=' +
      clientId;

    axios.get(url).then((res) => {
      setData(res.data);
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (inputValue !== '') {
        handleSubmit();
      }
    }
  };

  return (
    <HomeWrapper>
      <Search
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </HomeWrapper>
  );
};

export default Home;
