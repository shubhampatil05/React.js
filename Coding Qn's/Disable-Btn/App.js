import React from "react";
export const App = () => {
  const [text, setText] = React.useState("");

  const eventHandle = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" value={text} onChange={eventHandle} />
      <button disabled={text.length < 1}>Click</button>
    </>
  );
};
