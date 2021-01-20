import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Search from '../components/Search/Search';
import Modal from '../components/Modal/Modal';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px;

  &.with-modal {
    background: black;
    opacity: 0.6;
  }

  input {
    margin-bottom: 40px;
  }

  h1 {
    align-self: flex-start;
  }
`;

const ImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    '. . .'
    '. . .'
    '. . .';

  img {
    cursor: pointer;
    margin: 20px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
`;

const ClearButton = styled.button`
  position: absolute;
  top: calc(50% - 32px);
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const Results = ({ location }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeData, setActiveData] = useState({
    src: '',
    author: '',
    place: '',
    alt: '',
  });
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
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

  const handleClearButton = () => {
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (inputValue !== '') {
        handleSubmit();
        setSearchValue(inputValue);
      }
    }
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  console.log(data.hits);

  return (
    <>
      <Modal open={modalOpen} data={activeData} setModalOpen={setModalOpen} />
      <Wrapper className={modalOpen && 'with-modal'}>
        <InputWrapper>
          <Search
            results
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            value={inputValue}
          />
          <ClearButton onClick={handleClearButton}>x</ClearButton>
        </InputWrapper>
        {searchValue === '' ? (
          <h1>{location.state.name}</h1>
        ) : (
          <h1>{searchValue}</h1>
        )}
        {!data.total ? (
          <ImagesWrapper>
            {location.state.data.map((item, i) => {
              return (
                <img
                  key={i}
                  src={item.urls.small}
                  alt={item.alt_description}
                  onClick={() => {
                    handleModalOpen();
                    setActiveData({
                      src: item.urls.regular,
                      author: item.user.name,
                      place: item.user.location,
                      alt: item.alt_description,
                    });
                  }}
                />
              );
            })}
          </ImagesWrapper>
        ) : (
          <ImagesWrapper>
            {data.results.map((item, i) => {
              return (
                <img
                  key={i}
                  src={item.urls.small}
                  alt={item.alt_description}
                  onClick={() => {
                    handleModalOpen();
                    setActiveData({
                      src: item.urls.regular,
                      author: item.user.name,
                      place: item.user.location,
                      alt: item.alt_description,
                    });
                  }}
                />
              );
            })}
          </ImagesWrapper>
        )}
      </Wrapper>
    </>
  );
};

export default Results;
