// Creating Component..

import React from "react";

// When creating a React component, the component's name MUST start with an upper case letter.

// Function Component

function Func() {
  return (
    <>
      <h3>Function Component</h3>
    </>
  );
}

//--------------------------------------------------------------

// // Class Component..

// Class Component
// A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

// The  class component also requires a render() method, this method returns HTML.

class Greet extends React.Component {
  render() {
    return (
      <>
        <h3>Class Component</h3>
      </>
    );
  }
}

export { Greet, Func };

//--------------------------------------------------------------

// Component using props

// Function Component

export const MyFunction = (props) => {
  return (
    <>
      <h1>We are learing {props.name} Component</h1>
    </>
  );
};

//--------------------------------------------------------------

// Class Component

export class MyClass extends React.Component {
  render() {
    return <h1>We are learning {this.props.name} Component</h1>;
  }
}
