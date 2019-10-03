import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import List from '../List';
import AddItemBox from '../AddItemBox';
import { openModal, closeModal } from '../../store/actions/actions';

import 'style.css';

const withHOC = compose (
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

const Content = withHOC ( ({ open, close, isOpenModal }) => (
  <div className="content">
    <button onClick={open}>Open Modal</button>
    <Modal
      isOpen={isOpenModal}
      ariaHideApp = {false}
    >
      <button onClick={close}>Close Modal</button>
      <List />
      <AddItemBox />
    </Modal>
  </div>
));

export default Content;