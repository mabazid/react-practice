import classes from './ElementList.module.css';

const Element = (props) => {
  return (
    <li className={ classes.users }>{ props.name } : { props.age }</li>
  );
};
export default Element;
