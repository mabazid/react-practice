import React from 'react';
import classes from '../UI-Components/ElementList.module.css';
import Element from './Element';

const ElementsList = (props) => {

  return <table className={ classes.usersTable }>
    <tbody>
      { props.list.map((res) => (
        <Element
          myID={ res._id }
          key={ res._id }
          name={ res.name }
          age={ res.age }
        />
      ))
      }
    </tbody>
  </table>;
};

export default ElementsList;
