import { useOutletContext, useParams } from "react-router-dom";
// to recap useParams hook is taking the custome dinamic parameter in our Route which is id and then we assign it to {id} and the placed it in h1
// with the :id parameter we are saying that whatever comes after : replace it with id and then we take it from useParams and pass it in h1
export function Book() {
  const obj = useOutletContext();
  // the useOutlecContext function returns to us the context object that we passed trough the outlet
  // this is usefull because a lot of times when we have a shared layuot we are going to be using some shared logic or shared data in between all the children Routes
  const { id } = useParams();
  return (
    <h1>
      Book {id} {obj.hello}
    </h1>
  );
}
