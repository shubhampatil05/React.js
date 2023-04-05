import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Externel } from "./Component";
import "./NewTodo.css";

const Project = () => {
  const [List, setList] = useState("");
  const [Items, setItems] = useState([]);
  const Event = (e) => {
    setList(e.target.value);
  };
  const AddItem = () => {
    setItems((preValue) => {
      return [...preValue, List];
    });

    setList("");
  };

  return (
    <>
      <div className="Main">
        <div className="Content">
          <br />
          <h1>Shopping List</h1>
          <TextField
            id="standard-basic"
            label="AddItem"
            variant="standard"
            onChange={Event}
            value={List}
          />
          <button
            onClick={AddItem}
            className="btn btn-success rounded-circle mt-1"
          >
            <AddIcon />
          </button>

          <ol>
            {Items.map((Value, Index) => {
              return <Externel key={Index} text={Value} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export { Project };
