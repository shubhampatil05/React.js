import { useMemo, useState } from "react";

export const App = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const Inc = () => {
    setAdd(add + 1);
  };
  const Dec = () => {
    setMinus(minus - 1);
  };

  const MulCount = useMemo(() => {
    console.log("!!!!!!!!");
    return add * 10;
  }, [add]);

  return (
    <>
      <h1>{MulCount}</h1>
      <hr />
      <h4>{add}</h4>
      <button onClick={Inc}>Inc</button>
      <hr />
      <h4>{minus}</h4>
      <button onClick={Dec}>Dec</button>
    </>
  );
};
