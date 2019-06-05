import React from 'react';

const DeleteButton = ({ del }) => (
  <button onClick={del} type='button' className='btn btn-danger btn-sm'>
    Delete
  </button>
);

export default DeleteButton;
