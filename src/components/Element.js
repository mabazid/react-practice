// import EditUser from './EditUser'
import axios from 'axios';
import React, { useState } from 'react';
import classes from '../UI-Components/Form.module.css';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import EditUser from './EditUser';


const Element = (props) => {
  const [editMode, setEditMode] = useState(false);

  const deleteAction = () => {
    axios.delete(`http://localhost:5000/users/delete/`, { params: { id: props.myID } })
      .then(() => {
        console.log('here');
        // console.log(res);
        props.userDeleted();

      });
  };

  const updateAction = (element) => {
    axios.put(`http://localhost:5000/users/edit/`, {
      data: {
        id: props.myID,
        name: element.name,
        age: element.age,
      },
    })
      .then(() => {
        props.userDeleted();
      });
    displayEditC();
  };

  const displayEditC = () => {
    setEditMode(!editMode);
  };

  return (
    <tr className={ classes.inputDiv }>
      { editMode && <EditUser updateHandler={ updateAction } eAction={ displayEditC }/> }
      <td>{ props.name } : { props.age }</td>
      <td>
        <EditButton eAction={ displayEditC }/>
        <DeleteButton daction={ deleteAction }/>
      </td>
    </tr>
  );
};
export default Element;
