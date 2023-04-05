import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Tooltip from "@mui/material/Tooltip";
import "./Counter.css";

const Counter = () => {
  const [Value, setValue] = useState(0);

  const Increament = () => {
    setValue(Value + 1);
  };
  const Decreament = () => {
    if (Value > 0) {
      setValue(Value - 1);
    } else {
      alert("Zero Limit Reached");
    }
  };

  return (
    <>
      <div className="Main">
        <div className="Inner">
          <br />
          <h3>{Value}</h3>
          <Tooltip title="Increase">
            <Button onClick={Increament}>
              <AddIcon />
            </Button>
          </Tooltip>

          <Tooltip title="Decrease">
            <Button onClick={Decreament}>
              <RemoveIcon />
            </Button>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export { Counter };
