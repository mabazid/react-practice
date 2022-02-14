import React from 'react';
import classes from '../UI-Components/ElementList.module.css';
import Element from './Element';

const ElementsList = (props) => {
  const callback = () => {
    props.onDeleteUser();
  };

  return <table className={ classes.usersTable }>
    <tbody>
      { props.list.map((initialElements) => (
        <Element
          userDeleted={ callback }
          myID={ initialElements._id }
          key={ initialElements._id }
          name={ initialElements.name }
          age={ initialElements.age }
        />
      ))
      }
    </tbody>
  </table>;
};

export default ElementsList;
