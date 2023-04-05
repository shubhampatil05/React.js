import React from "react";

export class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  Delete = () => {
    this.setState({ show: false });
  };

  render() {
    let Header;
    if (this.state.show) {
      Header = <Child />;
    }

    return (
      <>
        {Header}
        <button onClick={this.Delete}>Delete</button>
      </>
    );
  }
}

export class Child extends React.Component {
  componentWillUnmount() {
    alert("Component is about to Unmount");
  }
  render() {
    return (
      <>
        <h1>Welcome</h1>
      </>
    );
  }
}
