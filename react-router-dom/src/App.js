import { Link, Route, Routes } from "react-router-dom";
// Routes component wrap around our individual or group of route componnts which each define a path to a different page in our website.
// every Route needs a path which is like a url that defines it's location and the component that is going trough that path is defined in the element.
// the root path of the application is sinmple slash
import "./App.css";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
// we can also do navigation with react router and to do that we use Link component
// Link component essentionaly gonna replace all the anchor tags in our application
// Link component is technically an anchor tag but it's going to be used within react-router to automatically swap things in the application without refreshing the entire page

function App() {
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  );
}

export default App;
