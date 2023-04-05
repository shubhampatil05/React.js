import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import "./NewTodo.css";

export const Externel = (props) => {
  const [Line, setLine] = useState(false);

  const Delete = () => {
    setLine(true);
  };

  return (
    <>
      <div className="List">
        <span onClick={Delete}>
          <DeleteIcon className="DeleteIcon" />
        </span>
        <li
          style={{
            listStyleType: "none",
            textDecoration: Line ? "line-through" : "none",
          }}
        >
          {props.text}
        </li>
      </div>
    </>
  );
};
