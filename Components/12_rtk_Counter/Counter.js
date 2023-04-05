import { useDispatch, useSelector } from "react-redux";
import { inc, dec, reset } from "./createSlice";

export const Counter = () => {
  const myData = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(inc());
  };
  const decrement = () => {
    dispatch(dec());
  };

  const res = () => {
    dispatch(reset());
  };

  return (
    <>
      <div
        style={{
          textAlign: "center",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "aliceblue",
          flexDirection: "column",
        }}
      >
        <span style={{ margin: "10px" }}>{myData}</span>

        <div>
          <button className="btn btn-success" onClick={() => increment()}>
            Increment
          </button>

          <button
            className="btn btn-primary"
            style={{ margin: "10px" }}
            onClick={() => res()}
          >
            Reset
          </button>

          <button
            className="btn btn-danger"
            onClick={() => {
              decrement();
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};
