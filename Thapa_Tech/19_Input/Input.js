import { useState } from "react";
import "./Input.css";

export const Input = () => {
  let [fName, setFName] = useState();
  let [lName, setLName] = useState();
  let [fNameNew, setfNameNew] = useState();
  let [lNameNew, setlNameNew] = useState();

  const InputEvent1 = (e) => {
    setFName(e.target.value);
  };
  const InputEvent2 = (e) => {
    setLName(e.target.value);
  };
  const Submit = (e) => {
    e.preventDefault();
    setfNameNew(fName);
    setlNameNew(lName);
  };

  return (
    <>
      <div>
        <form onSubmit={Submit}>
          <input onChange={InputEvent1}></input>
          <input onChange={InputEvent2}></input>
          <button type="submit">Submit</button>
          <br></br>
          <br></br>
          <p>{fNameNew}</p>
          <p>{lNameNew}</p>
        </form>
      </div>
    </>
  );
};
