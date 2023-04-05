import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Page404 } from "./Page404";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Page404 />} />
          {/* <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
