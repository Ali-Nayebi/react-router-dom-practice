import { Route, Routes } from "react-router-dom";
// Routes component wrap around our individual or group of route componnts which each define a path to a different page in our website.
// every Route needs a path which is like a url that defines it's location and the component that is going trough that path is defined in the element.
// the root path of the application is sinmple slash
import "./App.css";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookList />} />
    </Routes>
  );
}

export default App;
