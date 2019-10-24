import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import { connectModal } from 'redux-modal';
import FocusTrap from 'focus-trap-react';

import List from '../List';
import AddItemBox from '../AddItemBox';

const ModalInfo = ({ close, onOpen }) => (
  <Modal
    ariaHideApp={false}
    isOpen={onOpen}
  >
    <FocusTrap>
      <ContentWindow>
        <Button onClick={close}>Close Modal</Button>
        <List />
        <AddItemBox />
      </ContentWindow>
    </FocusTrap>
  </Modal>
);

ModalInfo.propTypes = {
  close: PropTypes.func.isRequired,
  onOpen: PropTypes.bool
}

export default connectModal({ name: 'myModal' })(ModalInfo);

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