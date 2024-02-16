import { useReducer, useState } from "react";

function reducer(state, action) {
  console.log(state, action);

  switch (action.type) {
    case "dec":
      return { ...state, count: state.count - 1 };
    case "inc":
      return { ...state, count: state.count + 1 };
    case "setCount":
      return { ...state, count: action.payload };
    default:
      throw new Error("unknown action");
  }
}
function DateCounter() {
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(1);

  const initialState = { count: 0, step: 1 };
  const [state, dispatchh] = useReducer(reducer, initialState);
  const { count, step } = state;
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatchh({ type: "dec" });
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
  };

  const inc = function () {
    dispatchh({ type: "inc" });
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatchh({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    // dispatchh({type: 'set', payload: });
  };

  const reset = function () {
    // setCount(0);
    // setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
