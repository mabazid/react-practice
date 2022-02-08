import React from 'react';
import classes from '../UI-Components/ElementList.module.css';
import Element from './Element';

const ElementsList = (props) => {
  const callback = () => {
    props.onDeleteUser();
  };

  return <table className={ classes.usersTable }>
    { props.list.map((initialElements) => (
      <Element
        userDeleted={ callback }
        myID={ initialElements._id }
        name={ initialElements.name }
        age={ initialElements.age }
      />
    ))
    }
  </table>;
};

export default ElementsList;
