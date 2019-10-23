import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addItem, removeItem, openModal, closeModal } from '../actions/actions'

/*import * as actionTypes from '../actions/actionTypes';*/

let ID = 0;

/*const modalReducer = (state = false, action) => {
    switch(action.type) {
        case actionTypes.OPEN_MODAL: {
            return true;
        }
        case actionTypes.CLOSE_MODAL: {
            return false;
        }
        default: return state;
    }
}*/

const modalReducer = handleActions(
  new Map([
    [
      openModal,
      () => true
    ],
    [
      closeModal,
      () => false
    ]
  ]),
  false
);

/*
const listReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      return state.concat([
        {
          text: action.payload.text,
          id: ++ID,
        }
      ]);
    }
    case actionTypes.REMOVE_ITEM: {
      return state.filter((value) => value.id !== action.payload.id);
    }
    default: {
      return state;
    }
  }
}
*/

const listReducer = handleActions(
  new Map([
    [
      addItem,
      (state, { payload:{text} }) => state.concat([{text: text, id: ++ID}])
    ],
    [
      removeItem,
      (state, { payload:{id} }) => state.filter((value) => value.id !== id)
    ]
  ]),
  []
);

export const reducer = combineReducers({
  modalState: modalReducer,
  listState: listReducer,
});