import React from "react";
export const App = () => {
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <>
      <button onClick={handleClick}>
        {show ? "Hide Element" : "Show Elment"}
      </button>

      {show ? <p>Element</p> : null}
    </>
  );
};
