import { Link, Outlet, useSearchParams } from "react-router-dom";

export function BookLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New Book</Link>
      {/* outlet component renders whatever te current route is in this case the children routes defined in the app.js */}
      <Outlet context={{ hello: "world" }} />
      {/* we can pass a object trough context variable in our outlet and then access it in any of the children routes that are rendering trough this outlet here we pass a object with a key of hello and the string of world as its value */}
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}
