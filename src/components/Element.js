// import EditUser from './EditUser'
import axios from 'axios';
import React, { useContext, useState } from 'react';
import ListContext from '../context/ListContext';
import classes from '../UI-Components/Form.module.css';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import EditUser from './EditUser';


const Element = (props) => {
  const [editMode, setEditMode] = useState(false);
  const listCTX = useContext(ListContext);

  const deleteAction = () => {
    axios.delete(`http://localhost:5000/users/delete/`, { params: { id: props.myID } })
      .then(() => {
        listCTX.onListUpdate();
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
        listCTX.onListUpdate();
      });
    displayEditC();
  };

  const displayEditC = () => {
    setEditMode(!editMode);
  };

  return (
    <tr className={ classes.inputDiv }>
      { editMode && <EditUser
        oldAge={ props.age }
        oldName={ props.name }
        updateHandler={ updateAction }
        eAction={ displayEditC }
      />
      }
      <td>{ props.name } : { props.age }</td>
      <td>
        <EditButton eAction={ displayEditC }/>
        <DeleteButton daction={ deleteAction }/>
      </td>
    </tr>
  );
};
export default Element;
