import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { BookRoutes } from "./BookRoutes";
// NavLink is just like Link it has all the same properties but it allows you to do specific things withthe active state of a Link so it has a few additional properties
// classname style and children properties allows you to take in a function and this function have the is active class
// the intresting thing about NavLink is that by default it applies an active class so if we import a css page that has the active class to color red the links that we didnt specified is going to be red when active.
function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
            {/* isActive is going to be true when we are in this link */}
            {/* we can also pass the isActive trough a className so when its acvie it uses that className */}
            {/* we can also pass a function down as a child and that function can have the isActive property too */}
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
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
