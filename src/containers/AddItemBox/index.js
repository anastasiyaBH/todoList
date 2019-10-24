import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addItem } from '../../store/actions/actions';

const ENTER_KEY = 'Enter';

const enhance = compose(
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
        setTextState('');;
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

const AddItemBox = enhance(({ change, click, keyPress, textState }) => {
  return (
    <StyledBox>
      <Input
        type='text'
        placeholder='list item'
        onChange={change}
        onKeyPress={keyPress}
        value={textState}
      />
      <Button
        onClick={click}
      >
        Add
        </Button>
    </StyledBox>
  )
});

export default AddItemBox;


const StyledBox = styled.div`
display: flex;
justify-content: center;
padding: 10px;
flex: 0 0 auto;
`;

const Input = styled.input`
margin: 0 10px;
width: 60%;
padding: 5px;
border: 3px solid #f7b3b9fc;

:focus {
  outline: 0;
  outline-offset: 0;
  border: 3px solid #fd949dfc;
}
`;

const Button = styled.button`
padding: 5px 20px;
margin: 0 10px;
background: #f7b3b9fc;
border: 2px solid #f7b3b9fc;

:hover {
  border: 2px solid #fd949dfc;
}

:active {
  background: #f3cacdfc;
}
`;