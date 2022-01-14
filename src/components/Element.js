const Element = (props) => {
  return (
    <li>
      <p>{ props.name }: { props.age }</p>
    </li>
  );
};
export default Element;
