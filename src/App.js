import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, reset } from "./features/counter/counterSlice";
function App() {
  const { count } = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();
  return (
    <>
      <h2>Count : {count}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase{" "}
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>
    </>
  );
}
export default App;
