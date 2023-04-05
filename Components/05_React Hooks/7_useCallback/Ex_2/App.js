import { useCallback, useMemo, useState } from "react";
import Child from "./Child";

export const App = () => {
  const [count, setCount] = useState(0);
  const [dependancy, setDependancy] = useState(0);

  const Inc_Count = () => {
    setCount(count + 1);
  };

  const Inc_Dependancy = () => {
    setDependancy(dependancy + 1);
  };

  const Learning = () => {
    //Some Operations
  };

  return (
    <>
      <Child Learning={Learning} />

      <h2>Count : {count}</h2>
      <button className="btn btn-success" onClick={Inc_Count}>
        Click
      </button>
      <h2>{dependancy}</h2>
      <button className="btn btn-danger" onClick={Inc_Dependancy}>
        Click
      </button>
    </>
  );
};
