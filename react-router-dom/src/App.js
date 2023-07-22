import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";
// Routes component wrap around our individual or group of route components which each define a path to a different page in our website.
// every Route needs a path which is like a url that defines it's location and the component that is going trough that path is defined in the element.
// the root path of the application is sinmple slash
// we can also do navigation with react router and to do that we use Link component
// Link component essentionaly gonna replace all the anchor tags in our application
// Link component is technically an anchor tag but it's going to be used within react-router to automatically swap things in the application without refreshing the entire page
// we can define a route that has a custome parameter inside of it which is going to be dinamic and able to be changed eg /books/:id this says that we have a url that goes /books and then there is something after it, in this case a id.
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
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} />
        {/* these last two routes technically match beacause new can be a id so how does react router know which one to use, well back before version 6 react-router used to go top to bottom and match the first one but in version 6 react router first matches all the hard coded routes and then if nothing marches goes trough the dinamic Routes */}
        <Route path="*" element={<NotFound />} />
        {/* the star symbol matches with everything so its usefull to create an error page with this path so if no other routes matched with the url it goes to the not found page with the star symbol route */}
      </Routes>
    </>
  );
}

export default App;
