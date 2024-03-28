import './App.css';
import { Modal } from './Modal';
import React, { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);

  function handleConfirm() {
    setOpen(false);
    alert(`you deleted me =(`);
  }

  return (
    <div>
      <button onClick={() => setOpen(true)}>Delete Me!</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <p>Mr Stark I don't feel so good</p>
        <button onClick={() => setOpen(false)}>cancel</button>
        <button onClick={handleConfirm}>confirm</button>
      </Modal>
    </div>
  );
}

export default App;
