import React from 'react';

const DeleteButton = (props) => {
  const deleteHandler = () => {
    props.daction();
  };

  return <button onClick={ deleteHandler }>Delete</button>;
};

export default DeleteButton;
