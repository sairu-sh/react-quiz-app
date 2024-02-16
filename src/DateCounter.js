import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "dec":
      return state--;
      break;
    case "inc":
      return state++;
    case "setCount":
      return action.payload;
    default:
      break;
  }
}
function DateCounter() {
  // const [count, setCount] = useState(0);
  const [count, dispatchh] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

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
    setStep(1);
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
