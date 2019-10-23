import React from 'react';
import { compose, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { removeItem } from '../../store/actions/actions';
import ListItem from '../../components/ListItem';

const StyledList = styled.ul`
margin-left: 0; 
padding-left: 0;
overflow-y: scroll;
flex: 1 0 auto;
flex-basis: 75%;
`;

const enhance = compose(
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

const List = enhance (({ items, click }) => (
  <>
    <StyledList>
      {
        items.map(item => (
          <ListItem key={item.id} text={item.text} handleClick={ () => click(item.id) }/>
        ))
      }  
    </StyledList>
  </>
 ));

export default List;
