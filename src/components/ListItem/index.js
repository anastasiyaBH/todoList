import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const ListItem = ({ text, handleClick }) => {
  return (
    <li className='list-item' onClick={handleClick} >
      <div className='list-item__text'>{text}</div>
    </li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default ListItem;