import { combineReducers } from 'redux';

import * as actionTypes from '../actions/actionTypes';

let ID = 0;

const modalReducer = (state = false, action) => {
    switch(action.type) {
        case actionTypes.OPEN_MODAL: {
            return true;
        }
        case actionTypes.CLOSE_MODAL: {
            return false;
        }
        default: return state;
    }
}

const listReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:{
      return state.concat([
        {
          text: action.text, 
          id: ++ID,
        }
      ]);
    }
    case actionTypes.REMOVE_ITEM: {
      return state.filter((value) => value.id !== action.id);
    }
    default: {
      return state;
    }
  }
}

export const reducer = combineReducers({
  modalState: modalReducer,
  listState: listReducer,
});