import * as actionTypes from './actionTypes';

export const openModal = () => ({
  type: actionTypes.OPEN_MODAL
});

export const closeModal = () => ({
  type: actionTypes.CLOSE_MODAL
});

export const addItem = (text) => ({
    type: actionTypes.ADD_ITEM,
    text
  });

export const removeItem = (id) => ({
  type: actionTypes.REMOVE_ITEM,
  id
});