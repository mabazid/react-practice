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
    <form className={ classes.form } onSubmit={ submitHandler }>
      <div className={ classes.input }>
        <label>Edit Name</label>
        <input
          type="text"
          value={ newName }
          onChange={ newNameHandler }
        />
      </div>
      <div className={ classes.input }>
        <label>Edit Age</label>
        <input
          type="number"
          value={ newAge }
          onChange={ newAgeHandler }
        />
      </div>
      <div className={ classes.buttonDiv }>
        <button type="submit">Save</button>
      </div>
    </form>
  </div>;
};
export default EditUser;
