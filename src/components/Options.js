function Options({ question, dispatch, answer }) {
  const answerSelected = answer != null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            index === question.correctOption && answerSelected
              ? "correct"
              : "wrong"
          }`}
          key={option}
          disabled={answerSelected}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
