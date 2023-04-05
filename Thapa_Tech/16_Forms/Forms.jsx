import { useState } from "react";
import "./Forms.css";

// const FormEvent = () => {
//   let Text = "";

//   let [State, setState] = useState(Text);
//   let [Name, setName] = useState();

//   const Output = (event) => {
//     let Value = event.target.value;

//     setState(Value);
//   };

//   const Submit = (event) => {
//     event.preventDefault();
//     setName(State);
//   };

//   return (
//     <>
//       <div>
//         <form onSubmit={Submit}>
//           <h3>
//             <span>{Name}</span>
//           </h3>
//           <input
//             type="text"
//             placeholder="Enter Your Name"
//             value={State}
//             onChange={Output}
//           ></input>
//           <button type="submit">Click</button>
//         </form>
//       </div>
//     </>
//   );
// };

// const FormEvent = () => {
//   let Text = "";

//   let [initialText, setText] = useState(Text);
//   let [Name, setName] = useState();

//   const Result = (event) => {
//     setText(event.target.value);
//   };
//   const Submit = () => {
//     setName(initialText);
//   };

//   return (
//     <>
//       <div>
//         <h3>{Name}</h3>
//         <input
//           placeholder="Enter Your Name"
//           value={initialText}
//           onChange={Result}
//         ></input>
//         <button onClick={Submit}>Click</button>
//       </div>
//     </>
//   );
// };

function FormEvent() {
  let [fName, setfName] = useState();
  let [lName, setlName] = useState();
  let [lNameNew, setlNameNew] = useState();
  let [Name, setName] = useState();

  const InputEvent1 = (event) => {
    setfName(event.target.value);
  };

  const InputEvent2 = (event) => {
    setlName(event.target.value);
  };

  const Submit = (event) => {
    event.preventDefault();
    setName(fName);
    setlNameNew(lName);
  };

  return (
    <>
      <div>
        <form onSubmit={Submit}>
          <h3>
            {Name} {lNameNew}
          </h3>
          <input onChange={InputEvent1} placeholder="Enter First Name"></input>
          <input onChange={InputEvent2} placeholder="Enter Last Name"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export { FormEvent };
