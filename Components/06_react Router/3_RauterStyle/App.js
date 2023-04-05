import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./Home";
import { SignIn } from "./SignIn";

const Obj = {
  widtht: "100%",
  display: "flex",
  justifyContent: "center",
  border: "1px solid black",
  backgroundColor: "aliceblue",
};

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <div style={Obj}>
          <ul>
            <li
              style={{
                display: "inline-block",
                marginRight: "50px",
                marginTop: "10px",
              }}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              style={{
                display: "inline-block",
                marginRight: "50px",
                marginTop: "10px",
              }}
            >
              <Link to="/SignIn">Sign In</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
