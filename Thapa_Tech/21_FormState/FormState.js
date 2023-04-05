import { useState } from "react";
import "./FormState.css";

export const MyForm = () => {
  let [FullName, setFullName] = useState({
    fName: "",
    lName: "",
    eMail: "",
    number: "",
  });

  const Event = (e) => {
    setFullName((preValue) => {
      // let value = e.target.value;
      // let name = e.target.name;

      const { value, name } = e.target;

      return {
        ...preValue,
        [name]: value,
      };

      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: preValue.lName,
      //     eMail: preValue.eMail,
      //     number: preValue.number,
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: preValue.fName,
      //     lName: value,
      //     eMail: preValue.Email,
      //     number: preValue.number,
      //   };
      // } else if (name === "eMail") {
      //   return {
      //     fName: preValue.fName,
      //     lName: preValue.lName,
      //     eMail: value,
      //     number: preValue.number,
      //   };
      // } else if (name === "number") {
      //   return {
      //     fName: preValue.fName,
      //     lName: preValue.lName,
      //     lName: preValue.eMail,
      //     number: value,
      //   };
      // }
    });
  };
  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form onSubmit={Submit}>
          <h4>
            Name : {FullName.fName} {FullName.lName}
          </h4>
          <h4>Email : {FullName.eMail}</h4>
          <h4>Phone : {FullName.number}</h4>
          <input
            type="text"
            name="fName"
            value={FullName.fName}
            placeholder="Enter First tName"
            autoCapitalize="off"
            onChange={Event}
          ></input>
          <input
            type="text"
            name="lName"
            value={FullName.lName}
            placeholder="Enter Last Name"
            autoCapitalize="off"
            onChange={Event}
          ></input>{" "}
          <input
            type="text"
            name="eMail"
            value={FullName.eMail}
            placeholder="Enter Your Email"
            autoCapitalize="off"
            onChange={Event}
          ></input>
          <input
            type="text"
            name="number"
            value={FullName.number}
            placeholder="Enter Your Number"
            autoCapitalize="off"
            onChange={Event}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
