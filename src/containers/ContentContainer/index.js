import React from 'react';
import List from '../List';
import AddItemBox from '../AddItemBox'

import Modal from 'react-modal';


const Content = () => (
  <div className="content">
    <button>Open Modal</button>
    <Modal
      isOpen={true}
    >
      <button>Close Modal</button>
      <List />
      <AddItemBox />
    </Modal>
  </div>
);

export default Content;