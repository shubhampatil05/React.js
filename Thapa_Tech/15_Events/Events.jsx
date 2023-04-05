import { useState } from "react";
import "./Events.css";

const Events = () => {
  let Color = "indianRed";
  let Text = "Click";

  let [Background, setBackground] = useState(Color);
  let [initialText, setText] = useState(Text);

  const bgColor = () => {
    setBackground("lightGreen");
    setText("Clicked");
  };
  const Original = () => {
    setBackground(Color);
    setText("Click");
  };

  const Alert = (a) => {
    alert("Event Has Been Triggered");
  };
  return (
    <div style={{ backgroundColor: Background }}>
      <button onClick={bgColor} onDoubleClick={Original} onMouseEnter={Alert}>
        {initialText}
      </button>
    </div>
  );
};
export { Events };

// Example from W3School..

function Football() {
  const Shoot = (a, b) => {
    alert(b.type);
  };

  return <button onClick={(event) => Shoot("Goal", event)}>Take A Shot</button>;
}

export { Football };
