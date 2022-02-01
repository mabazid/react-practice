import axios from 'axios';
import React from 'react';
import classes from '../UI-Components/Element.module.css';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

// axios.delete(`http://localhost:5000/users/delete`, { data: { source: props.myID } });

const Element = (props) => {
  const deleteAction = () => {
    axios.delete(`http://localhost:5000/users/delete/`, { params: { id: props.myID } })
      .then(() => {
        console.log('here');
        // console.log(res);
        props.userDeleted();
      });
  };

  return <div>
    <li
      className={ classes.li }
    >
      { props.name } : { props.age }
      <div>
        <EditButton/>
        <DeleteButton daction={ deleteAction }/>
      </div>
    </li>

  </div>;
};
export default Element;
