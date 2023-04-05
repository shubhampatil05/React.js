import { useState } from "react";

let Arr = [87, 98, 29, 48, 93];

let arr = [{ height: 98 }, { height: 87 }];

export const UseStateArray = () => {
  const [value, setValue] = useState(Arr);

  return (
    <>
      {Arr.map((currEle, index) => {
        if (currEle > 48) {
          return <h1 key={index}>{currEle}</h1>;
        }
      })}
    </>
  );
};

//------------------------------------------------------------

export const UseStateObject = () => {
  return (
    <>
      {arr.map((currEle, index) => {
        return <h1 key={index}>{currEle.height}</h1>;
      })}
    </>
  );
};

//------------------------------------------------------------

let Red = Arr.reduce((pre, next) => {
  return pre + next;
});

export const UseStateReduce = () => {
  return (
    <>
      <h1>{Red}</h1>
    </>
  );
};

//------------------------------------------------------------

// Counter..

const Initial = () => {
  console.log("Function Runs");
  return 0;
}; // if pass this funtion in use stateb this function runs everyone..

export const Counter = () => {
  // const [Count, setCount] = useState(Initial());

  const [Count, setCount] = useState(() => {
    console.log("Function Runs");
    return 0;
  });

  const Decrement = (preValue) => {
    setCount((preValue) => preValue - 1);
    // setCount((preValue) => preValue - 1); value decresing by two..
  };

  const Increment = (preValue) => {
    setCount((preValue) => preValue + 1);
    // setCount((preValue) => preValue + 1); value incresing by two..
  };

  return (
    <>
      <button onClick={Decrement}>Decrement</button>
      <span>{Count}</span>
      <button onClick={Increment}>Increment</button>
    </>
  );
};

//----------------------------------------------------------------

export const Car = () => {
  const [car, setCar] = useState({
    brand: "Ford",
    color: "black",
  });

  const changeColor = () => {
    setCar((preValue) => {
      return { ...preValue, color: "white" };
    });
  };

  return (
    <>
      <h1>
        {car.brand} {car.color}
      </h1>
      <button type="button" onClick={changeColor}>
        Click
      </button>
    </>
  );
};
