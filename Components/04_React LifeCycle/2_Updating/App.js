import React from "react";
import { render } from "react-dom";

// The Updating methods are..

// 1)getDerivedStateFromProps()
// 2)ShouldComponentUpdate()
// 3)render()
// 4)getSnapShotBeforeUpdate()
// 5)ComponentDidUpdate()

// 1)getDerivedStateFromProps()..

export class One extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { color: props.Change };
  }

  Event = () => {
    this.setState({ color: "blue" });
    console.log("Color Does Not Change");
  };

  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
        <button onClick={this.Event}>Click</button>
      </>
    );
  }
}

//---------------------------------------------------------------

// ComponentShouldUpdate()..

export class Two extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "cyan" };
  }

  shouldComponentUpdate() {
    return true;
    // if return true then component get updated else not;
  }

  Event = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
        <button onClick={this.Event}>Click</button>
      </>
    );
  }
}

//--------------------------------------------------------------

export class Three extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }

  Event = () => {
    this.setState({ color: "pink" });
  };

  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
        <button onClick={this.Event}>Click</button>
      </>
    );
  }
}

//--------------------------------------------------------------

// getSnapshotBeforeUpdate()..

export class Four extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "yellow" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "grey" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    return (document.getElementById("One").innerHTML =
      "Before update the color was" + " " + preState.color);
  }
  componentDidUpdate() {
    document.getElementById("Two").innerHTML =
      " After The update the  color is" + " " + this.state.color;
  }

  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
        <div id="One"></div>
        <div id="Two"></div>
      </>
    );
  }
}

//--------------------------------------------------------------

export class Five extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "black" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "indianRed" });
    }, 1000);
  }
  componentDidUpdate() {
    document.getElementById("Three").innerHTML =
      "The updated color is" + " " + this.state.color;
  }

  render() {
    return (
      <>
        <h1>{this.state.color}</h1>
        <div id="Three"></div>
      </>
    );
  }
}
