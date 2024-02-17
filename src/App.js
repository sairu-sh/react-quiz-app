import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import { questions } from "./data";

const initialState = {
  questions: [],

  //loading error ready active  finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "dataReceived" };

    default:
      throw new Error("Action is unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(function () {
    const res = fetch("http://localhost:8000/questions")
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching the data");
        return res.json();
      })
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => {
        console.log(err);
        dispatch({ type: "dataReceived", payload: questions });
      });
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
