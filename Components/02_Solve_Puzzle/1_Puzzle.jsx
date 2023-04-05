import { useState } from "react";
import { Data } from "./3_ApiData";
import { Comp } from "./2_Component";

const Puzzle = () => {
  const [data, setData] = useState(Data);

  return (
    <>
      <div className="Parent">
        <section className="Main">
          <h1 className="Heading">Think And Answer..</h1>
          {data.map((currElement) => {
            return <Comp key={currElement.id} {...currElement} />;
          })}
        </section>
      </div>
    </>
  );
};

export { Puzzle };
