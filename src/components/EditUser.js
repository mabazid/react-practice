import React, { useEffect, useState } from 'react';
import Button from '../UI-Components/Button';
import classes from '../UI-Components/EditUser.module.css';
import classes2 from '../UI-Components/Form.module.css';


const EditUser = (props) => {
  //for every stroke updated input
  const [newName, setNewName] = useState('');
  const [newAge, setNewAge] = useState('');
  const [inputIsEmpty, setInputIsEmpty] = useState(true);
  const [touched, setTouched] = useState(false);

  // const newNameRef = useRef();
  // const newAgeRef = useRef();

  const newAgeHandler = (event) => {
    setNewAge(event.target.value);
  };

  const newNameHandler = (event) => {
    setNewName(event.target.value);
  };


  useEffect(() => {
    // touched: because Name and Age are not empty by default, hence the previous values.
    if ((newName.length && newAge.length !== 0) && touched) {
      setInputIsEmpty(false);
    } else {
      setInputIsEmpty(true);
    }
  }, [newName, newAge]);

  const submitHandler = (event) => {
    event.preventDefault();

    // const newName = newNameRef.current.value;
    // const newAge = newAgeRef.current.value;

    const element = {
      name: newName,
      age: newAge,
    };
    props.updateHandler(element);
  };

  const touchEventHandler = () => {
    setTouched(true);
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
        <label>User: { props.oldName } { props.oldAge }</label>
      </div>

      <div className={ `${ classes2.inputDiv } ${ classes.inputDiv }` }>
        <label>New Name</label>
        <input
          onFocus={ touchEventHandler }
          onChange={ newNameHandler }
          type="text"
          // ref={ newNameRef }
          // autoFocus
        />
      </div>

      <div className={ `${ classes2.inputDiv } ${ classes.inputDiv }` }>
        <label>New Age</label>
        <input
          onFocus={ touchEventHandler }
          onChange={ newAgeHandler }
          type="number"
          // ref={ newAgeRef }
        />
      </div>
      <div className={ classes.buttonDiV }>
        <Button
          onClick={ props.eAction }
        >Cancel</Button>
        <Button
          type="submit"
          disabled={ inputIsEmpty }
        >Save</Button>
      </div>
    </form>
  </div>;
};
export default EditUser;
