import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Contact } from "./Contact";
import { Info } from "./Info";
import { More } from "./More";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/More" element={<More />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
