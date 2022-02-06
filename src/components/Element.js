import axios from 'axios';
import React, { useState } from 'react';
import classes from '../UI-Components/Element.module.css';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import EditUser from './EditUser';
// import EditUser from './EditUser'


const Element = (props) => {
  const [editMode, setEditMode] = useState(false);

  const deleteAction = () => {
    axios.delete(`http://mabazid:5000/users/delete/`, { params: { id: props.myID } })
      .then(() => {
        console.log('here');
        // console.log(res);
        props.userDeleted();

      });
  };

  const updateAction = (element) => {
    axios.put(`http://mabazid:5000/users/edit/`, {
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
    <div>
      { editMode && <EditUser updateHandler={ updateAction }/> }
      <div>
        <li
          className={ classes.li }
        >
          { props.name } : { props.age }
          <div>
            <EditButton eAction={ displayEditC }/>
            <DeleteButton daction={ deleteAction }/>
          </div>
        </li>
      </div>
    </div>);
};
export default Element;
