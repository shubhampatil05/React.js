import { useState } from "react";

export const Action = ({ Question, Answer }) => {
  const [show, setShow] = useState(false);

  // const getAns = () => {
  //   setShow(true);
  // };

  return (
    <>
      <div className="Result">
        <p onClick={() => setShow(!show)} className="btn">
          {show ? "➖" : "➕"}
        </p>

        {/* <p onClick={getAns}>{show ? "➖" : "➕"}</p> */}

        <h3>{Question}</h3>
      </div>

      {show && <p className="Ans">{Answer}</p>}
    </>
  );
};
