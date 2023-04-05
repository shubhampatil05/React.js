const New = (props) => {
  const Delete = () => {
    props.onSelect(props.id);
  };

  return (
    <>
      <li>{props.text}</li>
      <button onClick={Delete}>Remove</button>
    </>
  );
};
export { New };
