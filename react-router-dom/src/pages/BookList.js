import { Link } from "react-router-dom";
// because we defined a dinamic route /books/:id with these links we can go to /books/1 url and /books/2 url
// how do we know which book we are on beside the url because right now we are passing on the id trough the url but in the Book page we are not using it
// we can use the useParams hook. this hook is going to return an object that has all the custome parameters we defined in our Route, in our case the custome parameter is the id. so this is going to return to us a object that has the key of id and the value of id is going to be whatever is placed in that url
export function BookList() {
  return (
    <>
      <h1>Book List</h1>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New Book</Link>
    </>
  );
}
