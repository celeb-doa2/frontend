import React from 'react';

import Modal from "react-modal"

import '../css/modal.css'

export default({ isOpen, onRequestClose }) =>
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: 'modal-base',
      afterOpen: 'modal-base_after-open',
      beforeClose: 'modal-base_before-close'
    }}
    overlayClassName={{
      base: 'overlay-base',
      afterOpen: 'overlay-base_after-open',
      beforeClose: 'overlay-base_before-close'
    }}
    shouldCloseOnOverlayClick={true}
    closeTimeoutMS={2000}
  >
    <h1>i'm a modal</h1>
    <p>CORRECT!</p>
    <br></br>
    
    <button onClick={onRequestClose}>Close</button>
  </Modal>