import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Info from "./Info";

export const User = () => {
  return (
    <>
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to="/Info/Jenny">Jenny</Link>
          </li>
          <li>
            <Link to="/Info/Jonas">Jonas</Link>
          </li>
        </ul> */}

        <Routes>
          <Route path="Info/:name" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
