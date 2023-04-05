import React, { useState } from "react";
import "./5_Keep.css";
import AddIcon from "@mui/icons-material/Add";

export const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const Change = (e) => {
    const { name, value } = e.target;

    setNote((preData) => {
      return {
        ...preData,
        [name]: value,
      };
    });
  };

  const addEvent = (e) => {
    e.preventDefault();
    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <div className="Note">
        <form>
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            name="title"
            value={note.title}
            onChange={Change}
          />
          <textarea
            rows=""
            column=""
            placeholder="Write a note..."
            name="content"
            value={note.content}
            onChange={Change}
          />
          <button className="btn btn-light" onClick={addEvent}>
            <AddIcon />
          </button>
        </form>
      </div>
    </>
  );
};
