// Inline Css Styling in React Js

let Obj = {
  color: "green",
  fontStyle: "italic",
};

let Style = (
  <>
    {/* <h1 style={{ color: "green", backgroundColor: "yellow" }}>
      This Is New Heading
    </h1> */}

    <h1 style={Obj}>This Is New Heading</h1>
    <hr />
  </>
);
let New7 = ReactDOM.createRoot(document.getElementById("New7"));
New7.render(Style);
