import React, { useState } from 'react';
import classes from '../UI-Components/EditUser.module.css';

const EditUser = (props) => {
  const [newName, setNewName] = useState(props.name);
  const [newAge, setNewAge] = useState(props.age);

  const newAgeHandler = (event) => {
    setNewAge(event.target.value);
  };

  const newNameHandler = (event) => {
    setNewName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const element = {
      name: newName,
      age: newAge,
    };
    props.updateHandler(element);
  };

  return <div className={ classes.modal }>
    <form onSubmit={ submitHandler }>
      <label>Edit Name</label>
      <input
        type="text"
        value={ newName }
        onChange={ newNameHandler }
      />
      <div>
        <label>Edit Age</label>
        <input
          type="number"
          value={ newAge }
          onChange={ newAgeHandler }
        />
      </div>
      <button type="submit">Save</button>
    </form>
  </div>;
};
export default EditUser;
