import { Link, useRoutes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./BookRoutes";

function App() {
  let element = useRoutes([
    // we can define a custome hooke and define the routes using javascrips instead of jsx
    {
      path: "/", // here we use a useRoutes hook and we give it an array of objects containing the different pathes that we have
      element: <Home />,
      childeren: [{}, {}],
    },
    {
      path: "/books/*",
      element: <BookRoutes />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      {element}
    </>
  );
}

export default App;
