import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';

import List from '../List';
import AddItemBox from '../AddItemBox';
import { openModal, closeModal } from '../../store/actions/actions';

const StyledContent = styled.div`
flex: 1 0 auto;
display: flex;
`;

const ContentWindow = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
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
    state => ({
      isOpenModal: state.modalState
    }
    ),
    dispatch => ({
      openModal: () => {
        dispatch(openModal());
      },
      closeModal: () => {
        dispatch(closeModal());
      }
    })
  ),

  withHandlers({
    open: ({ openModal }) => () => {
      openModal();
    },

    close: ({ closeModal }) => () => {
      closeModal();
    },
  })
);

const Content = enhance(({ open, close, isOpenModal }) => (
  <StyledContent>
    <Button onClick={open}>Open Modal</Button>
    <Modal
      isOpen={isOpenModal}
      ariaHideApp={false}
    >
      <ContentWindow>
        <Button onClick={close}>Close Modal</Button>
        <List />
        <AddItemBox />
      </ContentWindow>
    </Modal>
  </StyledContent>
));

export default Content;