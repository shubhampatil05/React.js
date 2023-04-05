// - Take <h1> tag and add heading in it
// - Take <p> tag and add sone text in it
// - Take oredered list and add yout five series

let Challenge = (
  <>
    <h3>Best Netflix Pick</h3>
    <p>List Of Five Favorite Series</p>
    <ol>
      <li>Dark</li>
      <li>Manifest</li>
      <li>Mr Robot</li>
      <li>Extra Love</li>
      <li>Curriculam</li>
    </ol>
  </>
);

let NewChallenge = ReactDOM.createRoot(document.getElementById("New2"));

NewChallenge.render(Challenge);

// -------------------------------------------------
