import React from "react";
import { ReactDOM } from "react-dom/client";

// Mounting means putting the elements into the DOM..

// Four methods of Mounting
// 1) constructor()
// 2) getDerivedStateFromProps()
// 3) render()
// 4) componentDidMount()

// 1) consttructor..

export class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "green" };
  }
  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
      </>
    );
  }
}

//------------------------------------------------------------------

// 2) getDerivedStateFromProps..

export class Two extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "yellow" };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.Change };
  }

  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
      </>
    );
  }
}

//------------------------------------------------------------------

// 3)render..

export class Three extends React.Component {
  render() {
    return <h1>Rendering Element</h1>;
  }
}

//------------------------------------------------------------------

// 4)componentDidMount..

export class Four extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "cyan" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "yellow" });
    }, 1000);
  }

  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
      </>
    );
  }
}
