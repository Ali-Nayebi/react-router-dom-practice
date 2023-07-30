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
            {/* replace property: this will replace the url that we are on when we click this link si the last url will be deleted from the history the replace property is usefull in the log in page so when the user clicks the back button we dont want them to go back to the log in page  */}
          </li>
          <li>
            <Link to="/books" reloadDocument>Books</Link>
            {/* like we said react-router just changes the content inside the routes but with reloadDocument property its going to reload the entire page and not just the section that is changing */}
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
