import React, { useState } from 'react';
import Button from '../UI-Components/Button';
import classes from '../UI-Components/EditUser.module.css';
import classes2 from '../UI-Components/Form.module.css';

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
    <div
      className={ classes.backdrop }
      onClick={ props.eAction }
    />
    <form
      onSubmit={ submitHandler }
      className={ `${ classes2.form } ${ classes.form }` }
    >
      <div className={ `${ classes2.inputDiv } ${ classes.inputDiv }` }>
        <label>New Name</label>
        <input
          type="text"
          value={ newName }
          onChange={ newNameHandler }
        />
      </div>
      <div className={ `${ classes2.inputDiv } ${ classes.inputDiv }` }>
        <label>New Age</label>
        <input
          type="number"
          value={ newAge }
          onChange={ newAgeHandler }
        />
      </div>
      <div className={ classes.buttonDiV }>
        <Button onClick={ props.eAction }>Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  </div>;
};
export default EditUser;
