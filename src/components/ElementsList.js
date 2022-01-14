import Element from './Element';

const ElementsList = (props) => {

  return (<ul>
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
