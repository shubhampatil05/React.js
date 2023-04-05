import { useEffect, useState } from "react";
import React, { Component } from "react";

export const Effect = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    // alert("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setNum(num + 1)}>Click {num}</button>
    </>
  );
};

//-----------------------------------------------------------------

export const Example = () => {
  const [num, setNum] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You Clicked ${num} Times`;
  });

  return (
    <>
      <p>You Clicked {num} Times</p>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

// Same Example Using Class Component..

export class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Count: 0 };
  }

  componentDidMount() {
    document.title = `You Clicked ${this.state.Count} Times`;
  }
  componentDidUpdate() {
    document.title = `You Clicked ${this.state.Count} Times`;
  }

  render() {
    return (
      <>
        <p> You Clicked {this.state.Count} Times</p>
        <button
          onClick={() => {
            this.setState({ Count: this.state.Count + 1 });
          }}
        >
          Click
        </button>
      </>
    );
  }
}

//----------------------------------------------------------------------

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(count * 2);
  });

  return (
    <>
      <hr></hr>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>

      <h3>{calculation}</h3>
    </>
  );
};

//------------------------------------------------------------------
