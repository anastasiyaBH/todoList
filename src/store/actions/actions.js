import { createActions } from 'redux-actions';

export const { addItem, removeItem, openModal, closeModal } = createActions({
  ADD_ITEM: text=>({ text }),
  REMOVE_ITEM: id=>({ id }),
  OPEN_MODAL: ()=>{},
  CLOSE_MODAL: ()=>{}
});