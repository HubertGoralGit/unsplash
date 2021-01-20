import React from 'react';
import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  top: calc(50% - 45vh);
  left: calc(50% - 45vw);
  width: 90vw;
  height: 90vh;
  background: white;
  z-index: 100;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 40px 20px;
`;

const ImageWrapper = styled.div`
  padding: 20px 80px;
  height: 90%;
  object-fit: cover;

  img {
    height: 100%;
    width: 100%;
  }
`;

const ExitButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
`;

const Modal = ({ open, data, setModalOpen }) => {
  return (
    <>
      {open && (
        <ModalWrapper>
          <p>{data.author}</p>
          <ImageWrapper>
            <img src={data.src} alt={data.alt} />
          </ImageWrapper>
          <p>{data.place}</p>
          <ExitButton onClick={() => setModalOpen((prev) => !prev)}>
            x
          </ExitButton>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
