const Comp = (props) => {
  const Remove = () => {
    props.onSelect(props.Id);
  };

  return (
    <>
      <div className="List">
        <li>{props.text}</li>
        <button onClick={Remove} className="btn_2">
          Remove
        </button>
      </div>
    </>
  );
};

export { Comp };
