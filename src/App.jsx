import "./slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "./slices/counterSlice";

function App() {
  const { count } = useSelector((store) => store.counterous);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Count: {count}</h1>
      <div className="flex justify-center space-x-3 pt-3">
        <button
          className="bg-gray-200 rounded px-2 py-1"
          onClick={() => dispatch(increase("this is increase"))}
        >
          Increase +
        </button>
        <button
          className="bg-gray-200 rounded px-2 py-1"
          onClick={() => dispatch(decrease([1, 2, 3]))}
        >
          decrease -
        </button>
        <button
          className="bg-gray-200 rounded px-2 py-1"
          onClick={() =>
            dispatch(
              reset({
                one: "this is one",
                two: "this is two",
                three: "this is three",
              })
            )
          }
        >
          Reset{" "}
        </button>
      </div>
    </div>
  );
}

export default App;
