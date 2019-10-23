import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledItem = styled.li`
  padding: 10px;
  margin: 5px;
  list-style-type: none;
  background: #f7b3b959;
  border: 2px solid #f7b3b959;
  word-wrap: break-word;
  
  :hover {
  padding: 10px;
  list-style-type: none;
  border: 2px solid #f7b3b9fc;
}

  :active {
  padding: 10px;
  list-style-type: none;
  background: #f7b3b9fc;
  border: 2px solid #f7b3b9fc;
}
`;

const ListItem = ({ text, handleClick }) => {
  return (
    <StyledItem onClick={handleClick} >{ text }</StyledItem>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default ListItem;