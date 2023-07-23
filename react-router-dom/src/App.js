import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";
import { BookLayout } from "./BookLayout";

function App() {
  return (
    <>
      <Routes location="/books">
        <Route path="/books" element={<h1>Extra Content</h1>} />
      </Routes>
      {/* we can have multiple Routes in our applicaton we dont need to have just one. which is usefull when we want to show extra content based on a route that is different from our main content */}
      {/* so any time that we are on /books route it will render the /books Route above and the one at the bottom of the page */}
      {/* another thing that we can do when we have multiple Routes is to hard code our location now it doesnt matter what url i go to by hard coding our location its always going to render */}
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
        {/* home page does not render BookLayout because its not in the /books parent route so the outlet doesnt show here */}
        <Route path="/" element={<Home />} />
        {/* we created a page called bookLayout and passed it to the parent books route so that the list of different book will always be shown */}
        {/* but now the children routes are not showing in the page,for them to show up we need to define a component called outlet in our bookLayout */}
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {/* we can nest Routes inside a parent Route and this nesting makes it really easy to combine Routes together eg here every Route that starts with /books can be nested inside /books Route and for rendering our original /books Route we create a Route with just a index parameter */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
