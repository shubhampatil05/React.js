import React from "react";
import "./SlotMachine.css";

const SM = (Props) => {
  let { x, y, z } = Props;

  if (x === y && y === z) {
    return (
      <>
        <div className="First">
          <h3>
            {x} {y} {z}
          </h3>
          <h3>This Is Matching</h3>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="First">
          <h3>
            {x} {y} {z}
          </h3>
          <h3>This Is Not Matching</h3>
          <hr />
        </div>
      </>
    );
  }
};
function SlotMachine() {
  return (
    <>
      <h3 className="Heading">
        🎰 Welcome To <span>Slot Machine Game</span> 🎰
      </h3>
      <div className="Second">
        <SM x="😄" y="😄" z="😄" />
        <SM x="🍎" y="🍇" z="🍇" />
        <SM x="🚗" y="🚗" z="🏍️" />
      </div>
    </>
  );
}

export { SlotMachine };
