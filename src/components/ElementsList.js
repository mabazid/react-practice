import Element from './Element';
import classes from './ElementList.module.css';

const ElementsList = (props) => {

  return (<ul className={ classes.users }>
    { props.list.map((initialElements) => (
      <Element
        name={ initialElements.name }
        age={ initialElements.age }
      />
    ))
    }
  </ul>);
};

export default ElementsList;
