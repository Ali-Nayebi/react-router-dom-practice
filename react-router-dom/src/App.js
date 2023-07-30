import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./BookRoutes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" replace>Home</Link>
            {/* replace property: this will replace the url that we are on when we click this link si the last url will be deleted from the history */}
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/* we can create separate routes in other pages but the key when we have one Route that is rendering other Routes is to make sure that your path has a /* at the end of it and the reason for that is you want to make sure that you match anything that cones after the path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
