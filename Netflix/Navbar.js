import React from "react";
import "./index.css";

function Navbar() {
  return (
    <>
      <div className="Nav">
        <h3>Netflix</h3>
        <div className="Content">
          <p className="Para1">unlimited tv shows and movies</p>

          <a href="https://www.netflix.com/in/" className="JoinNow">
            JOIN NOW
          </a>
          <a href="https://www.netflix.com/in/login" className="SignIn">
            SIGN IN
          </a>
        </div>
      </div>

      <div className="Heading">
        <h1 className="FirstHeading">BingeWorthy TV Shows</h1>

        <p className="Para2">
          When it comes to great TV, portion control is for suckers. Here are
          the best shows -- from sitcoms to dramas to reality -- to devour all
          at once.
        </p>
      </div>
    </>
  );
}
export default Navbar;
