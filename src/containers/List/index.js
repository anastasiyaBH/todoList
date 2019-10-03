import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';

import { removeItem } from '../../store/actions/actions';
import ListItem from '../../components/ListItem';

const withHOC = compose(
  connect( 
    state => ({
      items: state.listState
    }), 
    dispatch => ({
      removeItem: (id) => {
        dispatch(removeItem(id));
      },
    }),
  ),

  withHandlers({
    click: ({removeItem}) => (id) => {
     if (id) {
        removeItem(id);
      }
    }
  })
);

const List = withHOC ( ({ items, click }) => (
  <div className="list">
    <ul>
      {
        items.map(item => (
          <ListItem key={item.id} text={item.text} handleClick={ () => click(item.id) }/>
        ))
      }
    
    </ul>
  </div>
 ));

export default List;
