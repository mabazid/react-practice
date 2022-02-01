import React from 'react';
import Card from '../UI-Components/Card';
import Element from './Element';
import classes from './ElementList.module.css';

const ElementsList = (props) => {
  const callback = ()=>{
    props.onDeleteUser();
  }

  return <div>
    <Card>
      <ul className={ classes.users }>
        { props.list.map((initialElements) => (
          <Element
            userDeleted={callback}
            myID={ initialElements._id }
            name={ initialElements.name }
            age={ initialElements.age }
          />
        ))
        }
      </ul>
    </Card>
  </div>;
};

export default ElementsList;
