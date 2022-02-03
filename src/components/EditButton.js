import React from 'react';


const DeleteButton = (props) => {
  const editHandler = () => {
    props.eAction();
  };

  return <button onClick={ editHandler }>Edit</button>;
};

export default DeleteButton;
