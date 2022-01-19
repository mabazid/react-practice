import { useState } from 'react';
import Button from '../UI-Components/Button';
import Card from '../UI-Components/Card';

const Form = (props) => {
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');

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

    props.passInitial(element);
    setNewName('');
    setNewAge('');
  };

  return (
    <Card>
      <form onSubmit={ submitEventHandler }>
        <label>User Name</label>
        <input
          type="text" value={ newName }
          onChange={ newNameHandler }
        />
        <label>Age (Years)</label>
        <input
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
