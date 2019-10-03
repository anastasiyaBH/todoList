import React from 'react';
import './style.css';
import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { addItem } from '../../store/actions/actions';

const ENTER_KEY = 'Enter';

const withHOC = compose(
  connect( 
    () => ({}), 
    dispatch => ({
      addItem: (text) => {
        dispatch(addItem(text));
      },
    }),
  ),

  withState('textState','setTextState',''),

  withHandlers({
    change: ({setTextState}) => ({target: { value }}) =>{
      setTextState(value);
    },

    keyPress: ({textState, setTextState, addItem}) => ({key}) => {
      if (key === ENTER_KEY && textState) {
        addItem(textState);
        setTextState('');
      }
    },

    click: ({textState, setTextState, addItem}) => () => {
      if (textState) {
        addItem(textState);
        setTextState('');
      }
    }
  })
);

const AddItemBox = withHOC(({ change, click, keyPress }) => {
  return (
    <div className='addItemBox'>
      <input
        className='addItemBox__input'
        type='text'
        placeholder='list item'
        onChange={change}
        onKeyPress={keyPress}
      />
      <button
        className='addItemBox__button'
        onClick={click}
      >
        Add
        </button>
    </div>
  )
});

export default AddItemBox;
