import React, { useRef } from 'react';
import Button from '../UI-Components/Button';
import classes from '../UI-Components/EditUser.module.css';
import classes2 from '../UI-Components/Form.module.css';

const EditUser = (props) => {
  // for every stroke updated input
  // const [newName, setNewName] = useState(props.oldName);
  // const [newAge, setNewAge] = useState(props.oldAge);
  // const newAgeHandler = (event) => {
  //   setNewAge(event.target.value);
  // };
  //
  // const newNameHandler = (event) => {
  //   setNewName(event.target.value);
  // };

  const newNameRef = useRef();
  const newAgeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const element = {
      name: newNameRef.current.value,
      age: newAgeRef.current.value,
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
        <label>User: { props.oldName } { props.oldAge }</label>
      </div>

      <div className={ `${ classes2.inputDiv } ${ classes.inputDiv }` }>
        <label>New Name</label>
        <input
          type="text"
          ref={ newNameRef }
          autoFocus
        />
      </div>

      <div className={ `${ classes2.inputDiv } ${ classes.inputDiv }` }>
        <label>New Age</label>
        <input
          type="number"
          ref={ newAgeRef }
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
