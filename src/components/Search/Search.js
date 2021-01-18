import styled from 'styled-components';
import searchIcon from '../../assets/icons/search.svg';

const Search = styled.input`
  position: relative;
  width: 70vw;
  height: 50px;
  border-radius: 4px;
  border: none;
  outline: none;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  padding: 0 50px;
  font-size: 18px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 25px;
  background-position: 10px 12px;

  :before {
    content: url(${searchIcon});
    position: absolute;
  }
`;

export default Search;
