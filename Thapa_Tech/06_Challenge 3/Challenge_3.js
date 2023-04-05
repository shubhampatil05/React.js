// Challenge 3..

let T = new Date().getHours();
let StyleObj = {};
console.log(T);
let Greeting = {};

if (T >= 1 && T <= 11) {
  StyleObj.color = "green";
  // - Show Heding that shows hello sir Good morning if the time is between 1 to 11Am
  // - Good AfterNoon if the time is 12pm to 5pm
  // - Good Evening if the time is 6 to 8pm
  // - Good Night if the time is 8pm till mmidnight

  // Using inline CSS dynamically bb change the color of the Greeting..

  // like green,orange,cyan, black etc..

  Greeting.Greet = "Good Morning";
} else if (T > 11 && T < 17) {
  StyleObj.color = "orange";
  Greeting.Greet = "Good AfterNoon";
} else if (T >= 17 && T < 20) {
  StyleObj.color = "red";
  Greeting.Greet = "Good Evening";
} else {
  StyleObj.color = "cyan";
  Greeting.Greet = "Good Night";
}
let Challenge_3 = (
  <>
    <h4>
      Hello Sir,
      <span style={StyleObj}>{`${Greeting.Greet}`}</span>
      <hr />
    </h4>
  </>
);

let New8 = ReactDOM.createRoot(document.getElementById("New8"));

New8.render(Challenge_3);
