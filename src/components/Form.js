// import Button from '../UI-Components/Button';
import axios from 'axios';
import React, { useState } from 'react';
import classes from '../UI-Components/Form.module.css';

const Form = (props) => {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  let added = false;

  const newNameHandler = (event) => {
    setNewName(event.target.value);
  };

  const newAgeHandler = (event) => {
    setNewAge(event.target.value);
  };


  const submitEventHandler = (event) => {
    event.preventDefault();

    const element = {
      name: newName,
      age: newAge,
    };
    axios.post('http://localhost:5000/users/add', element)
      .then(res =>
        res.data === 'User added!',
      ).then(() => {
      // if (added === true) {
      //   props.passInitial(element);
      // }
      props.onAddUser();
    });


    setNewName('');
    setNewAge('');
  };

  return (
    <form
      className={ classes.form }
      onSubmit={ submitEventHandler }
    >
      <div className={ classes.inputDiv }>
        <label>User Name </label>
        <input placeholder="Max Mustermann"
               type="text" value={ newName }
               className={ classes.input }
               onChange={ newNameHandler }
        />
      </div>
      <div className={ classes.inputDiv }>
        <label>Age </label>
        <input placeholder="Enter Age" size="md"
               type="number"
               value={ newAge }
               className={ classes.input }
               onChange={ newAgeHandler }
        />
      </div>
      <div className={ classes.btn }>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};
export default Form;
