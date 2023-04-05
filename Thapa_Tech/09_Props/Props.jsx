export function Phone(Props) {
  return <h3>{Props.Brand}</h3>;
}

export function Shop() {
  return <Phone Brand="Apple" />;
}

//------------------------------------

export const Info = [
  {
    Name: "Shubham",
    Age: "25",
  },
];

export function Dis(Props) {
  return (
    <>
      <h3>{Props.Name}</h3>
      <h3>{Props.Age}</h3>
    </>
  );
}

// Indes.js

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { Dis } from "./Programs/13_Props";
// import { Info } from "./Programs/13_Props";
// import { Shop } from "./Programs/13_Props";

// console.log(Info[0].Name);
// ReactDOM.createRoot(document.getElementById("foot")).render(
//   <>
//     <Dis Name={Info[0].Name} />
//     <Dis Name={Info[0].Age} />
//   </>
// );
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <Shop />
//   </>
// );
