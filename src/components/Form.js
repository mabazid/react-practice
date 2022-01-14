import { useState } from 'react';

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

  const reset = () => {
    setNewName('');
    setNewAge('');
  };

  return (
    <form onSubmit={ submitEventHandler }>
      <label>User Name</label>
      <input
        type="text"
        value={ newName }
        onChange={ newNameHandler }
      />
      <label>Age (Years)</label>
      <input
        type="number"
        value={ newAge }
        onChange={ newAgeHandler }
      />
      <button type="submit">Add User</button>
    </form>
  );
};
export default Form;
