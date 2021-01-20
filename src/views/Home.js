import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import routes from '../routes/index';
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

const InputWrapper = styled.div`
  position: relative;
`;

const ClearButton = styled.button`
  position: absolute;
  top: calc(50% - 15px);
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState({ hits: [] });
  const [redirect, setRedirect] = useState(false);
  const clientId = 'gT1WuxqKFaV21yLTOZaqBrwhSp_beHF4PWyE_eEaAa0';

  const handleSubmit = () => {
    const url =
      'https://api.unsplash.com/search/photos?page=1&query=' +
      inputValue +
      '&client_id=' +
      clientId;

    axios.get(url).then((res) => {
      setData(res.data);
      setRedirect(true);
    });
  };

  const handleClearButton = () => {
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (inputValue !== '') {
        handleSubmit();
      }
    }
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: routes.results,
          state: { name: inputValue, data: data.results },
        }}
      />
    );
  }

  return (
    <HomeWrapper>
      <InputWrapper>
        <Search
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          value={inputValue}
        />
        <ClearButton onClick={handleClearButton}>x</ClearButton>
      </InputWrapper>
    </HomeWrapper>
  );
};

export default Home;
