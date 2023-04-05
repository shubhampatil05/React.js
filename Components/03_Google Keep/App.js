import React, { useState } from "react";
import { Header } from "./1_Header";
import { CreateNote } from "./2_CreateNote";
import { SaveNotes } from "./3_SaveNote";
import { Footer } from "./4_Footer";

export const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((preData) => {
      return [...preData, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((data) => {
      return data.filter((currEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      <div className="Wrap">
        {addItem.map((val, index) => {
          return (
            <SaveNotes
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={onDelete}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
};
