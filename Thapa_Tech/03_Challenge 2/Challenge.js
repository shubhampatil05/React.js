// Challenge_2..

// - Add <h1> element add Heading in it
// - Add <p> element add current date
// - Add another <p> element and add current time

let _Date = new Date().toLocaleDateString();
let _Time = new Date().toLocaleTimeString();

let Date_Time = (
  <>
    <hr></hr>
    <h1 className="Heading">We Are Printing Today's Date And Time</h1>
    <p>{`Today's date is :-  ${_Date}`}</p>
    <p>{`Current Time Is :- ${_Time}`}</p>
  </>
);

let New5 = ReactDOM.createRoot(document.getElementById("New5"));

New5.render(Date_Time);
