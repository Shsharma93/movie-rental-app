import React from 'react';

const DeleteButton = props => (
  <button onClick={props.del} type='button' className='btn btn-danger btn-sm'>
    Delete
  </button>
);

export default DeleteButton;
