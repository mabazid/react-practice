// import Button from '../UI-Components/Button';
import axios from 'axios';
import React, { useReducer } from 'react';
import Button from '../UI-Components/Button';
import classes from '../UI-Components/Form.module.css';


const nameReducer = (state, action) => {
  if (action.type === 'nameInput') {
    return {
      value: action.value,
      valid: action.value.length !== 0,
    };
  }
  return {
    value: '',
    valid: false,
  };
};

const ageReducer = (state, action) => {
  if (action.type === 'ageInput') {
    return {
      value: action.value,
      valid: action.value > 10,
    };
  }
  return {
    value: '',
    valid: false,
  };
};

const Form = (props) => {
  // handling input with useState
  // const [newName, setNewName] = useState('');
  // const [newAge, setNewAge] = useState('');
  // const [inputIsEmpty, setInputIsEmpty] = useState(true);

  // useEffect(() => {
  //   if (newName && newAge) {
  //     setInputIsEmpty(false);
  //   } else {
  //     setInputIsEmpty(true);
  //   }
  // }, [newName, newAge]);


  const [newName, dispatchName] = useReducer(nameReducer, {
    value: '',
    valid: false,
  });
  const [newAge, dispatchAge] = useReducer(ageReducer, {
    value: '',
    valid: false,
  });

  const newNameHandler = (event) => {
    dispatchName({ type: 'nameInput', value: event.target.value });
  };

  const newAgeHandler = (event) => {
    dispatchAge({ type: 'ageInput', value: event.target.value });
  };

  const submitEventHandler = (event) => {
    event.preventDefault();

    const element = {
      name: newName.value,
      age: newAge.value,
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


    dispatchName({});
    dispatchAge({});
  };

  return (
    <form
      className={ classes.form }
      onSubmit={ submitEventHandler }
    >
      <div className={ classes.inputDiv }>
        <label>User Name </label>
        <input placeholder="Max Mustermann"
               type="text"
               value={ newName.value }
               className={ classes.input }
               onChange={ newNameHandler }
        />
      </div>
      <div className={ classes.inputDiv }>
        <label>Age </label>
        <input placeholder="Enter Age" size="md"
               type="number"
               value={ newAge.value }
               className={ classes.input }
               onChange={ newAgeHandler }
        />
      </div>
      <div className={ classes.btn }>
        <Button
          type="submit"
          disabled={ !(newName.valid && newAge.valid) }
        >Add User</Button>
      </div>
    </form>
  );
};
export default Form;
