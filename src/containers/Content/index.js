import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import List from '../List';
import AddItemBox from '../AddItemBox';
import { openModal, closeModal } from '../../store/actions/actions';

import './style.css';

const enhance = compose (
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

const Content = enhance ( ({ open, close, isOpenModal }) => (
  <div className="content">
    <button className="content__button" onClick={open}>Open Modal</button>
    <Modal
      isOpen={isOpenModal}
      ariaHideApp = {false}
    >
      <div className="content__window">
      <button className="content__button" onClick={close}>Close Modal</button>
      <List />
      <AddItemBox />
      </div>
    </Modal>
  </div>
));

export default Content;