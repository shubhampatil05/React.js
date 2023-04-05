import React from "react";

// chnge parent value through its child

const Child = ({ setValue }) => {
  const handleClick = () => {
    setValue("My value changed");
  };

  return (
    <>
      <div>
        <h2>Child</h2>
        <button onClick={handleClick}>Click</button>
      </div>
    </>
  );
};

export const Parent = () => {
  const [value, setValue] = React.useState(
    "I want to change my value through child"
  );

  return (
    <>
      <h2>Parent</h2>
      <h4>{value}</h4>
      <Child setValue={setValue} />
    </>
  );
};
