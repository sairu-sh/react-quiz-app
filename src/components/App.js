import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "../Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
// import { questions } from "./data";

const initialState = {
  questions: [],

  //loading error ready active  finished
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailure":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
      };
    default:
      throw new Error("Action is unknown");
  }
}

export default function App() {
  const [{ questions, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;

  useEffect(function () {
    const res = fetch("http://localhost:8000/questions")
      .then((res) => {
        if (!res.ok) throw new Error("Error fetching the data");
        return res.json();
      })
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => {
        console.log(err);
        dispatch({ type: "dataFailure" });
        //for github pages
        // dispatch({ type: "dataReceived", payload: questions });
      });
  }, []);
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}
