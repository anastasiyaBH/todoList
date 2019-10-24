import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import {show, hide} from 'redux-modal';

import styled from 'styled-components';
import ModalInfo from '../ModalInfo'

const StyledContent = styled.div`
flex: 1 0 auto;
display: flex;
`;

const Button = styled.button`
margin: auto;
padding: 10px;
background: #f7b3b9fc;
border: 2px solid #f7b3b9fc;

:hover {
  border: 2px solid #fd949dfc;
}

:active {
  background: #f3cacdfc;
}
`;

const enhance = compose(
  connect(
    (state) => {
      console.log(state.modal);
      if(state.modal)
      return {
        isOpenModal: true
      }
      else return{
        isOpenModal: false
      }
  },
    dispatch => ({
      openModal: () => {
        console.log('OPEN MODAL DISPATCH');
        dispatch(show('myModal'));
        
      },
      closeModal: () => {
        dispatch(hide('myModal'));
        console.log('CLOSE MODAL DISPATCH');
      }
    })
  ),

  withHandlers({
    open: ({ openModal }) => () => {
      console.log('OPEN MODAL');
      openModal();
    },

    close: ({ closeModal }) => () => {
      console.log('CLOSE MODAL');
      closeModal();
    },
  })
);

const Content = enhance(({ open, close, isOpenModal }) => (
  <StyledContent>
    <Button onClick={open}>Open Modal</Button>
    <ModalInfo close={close} onOpen={isOpenModal} />
  </StyledContent>
));

export default Content;