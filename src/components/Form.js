import { Button, Input } from '@mantine/core';
import axios from 'axios';
import React, { useState } from 'react';
// import Button from '../UI-Components/Button';
import Card from '../UI-Components/Card';
import formStyle from './forum.module.css';

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
      .then(res => {
        if (res.data === 'User added!') {
          added = true;
          console.log('first ' + added);
        }
      }).then(() => {
      if (added === true) {
        props.passInitial(element);
      }
    });


    setNewName('');
    setNewAge('');
  };

  return (
    <Card>
      <form
        className={ formStyle.forum }
        onSubmit={ submitEventHandler }
      >
        <label
          className={ formStyle.label }
        >User Name</label>
        <Input
          type="text" value={ newName }
          onChange={ newNameHandler }
        />
        <label
          className={ formStyle.label }
        >Age (Years)</label>
        <Input
          type="number"
          value={ newAge }
          onChange={ newAgeHandler }
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};
export default Form;
