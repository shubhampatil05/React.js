import { useState } from "react";
import { Data } from "./3_ApiData";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Comp = ({ Question, Answer }) => {
  const [showData, setShowData] = useState(false);

  return (
    <>
      <div className="Result">
        <button className="btn mb-3" onClick={() => setShowData(!showData)}>
          {showData ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
        </button>
        <p className="Qn">{Question}</p>
      </div>

      {showData && (
        <h5 className="Ans">
          <span>Ans</span> : {Answer}
        </h5>
      )}
    </>
  );
};

export { Comp };
