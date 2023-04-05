// React.fregment..

// If We want to add multiple elements inside an rebder method,we know that render takes only one element..w've to wrap elements in <div>,
// but extra div gets added in node so just use FRAGMENt to add multiple elements in render();

let Element = (
  <React.Fragment>
    <label>Enter Your Name</label>
    <br></br>
    <br></br>
    <input type="text"></input>
    <br></br>
    <br></br>
    <button>Submit</button>
    <hr></hr>
  </React.Fragment>
);

let New1 = ReactDOM.createRoot(document.getElementById("New1"));
New1.render(Element);

//--------------------------------------------------

// Insted of writing <React.Fragment> we can just wrote <> to open fragment tag </> to clese fragment tag

const Ele = (
  <>
    <label>Enter Your Name</label>
    <br></br>
    <br></br>
    <input type="text"></input>
    <br></br>
    <br></br>
    <button>Submit</button>
    <hr></hr>
  </>
);

let New2 = ReactDOM.createRoot(document.getElementById("New2"));
New1.render(Element);
