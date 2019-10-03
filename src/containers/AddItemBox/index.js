import React from 'react';
import './style.css';

const AddItemBox = () => {
  return (
    <div className='addItemBox'>
      <input
        className='addItemBox__input'
        type='text'
        placeholder='list item'
      />
      <button
        className='addItemBox__button'
      >
        Add
        </button>
    </div>
  )
}

export default AddItemBox;