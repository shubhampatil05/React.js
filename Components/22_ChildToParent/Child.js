import { useState } from "react";

// in react..data is transformed from child to parent by using callback function

// in the parent component, create a callback function. This callback function will collect the data from the child component. Pass the callback function to the child as a props from the parent component. The child component calls the parent callback function using props and passes the data to the parent component.

export const Child = ({ setData }) => {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <input type="text" value={val} onChange={handleChange} />
      <button onClick={() => setData(val)}>Submit</button>
    </>
  );
};
