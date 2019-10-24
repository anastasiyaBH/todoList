import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addItem, removeItem} from '../actions/actions';
import {reducer as modal} from 'redux-modal';

let ID = 0;

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
  listState: listReducer,
  modal
});