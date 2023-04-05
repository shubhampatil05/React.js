import { useState } from "react";
import { Data } from "./Data";
import { Action } from "./Action";

import "./index.css";

export const App = () => {
  const [findData, setFindData] = useState(Data);

  return (
    <>
      <section className="Main-Data">
        <h2>React Question's</h2>

        {findData.map((currElement, index) => {
          const { id, Question, Answer } = currElement;

          return <Action key={id} {...currElement} />;
        })}
      </section>
    </>
  );
};
