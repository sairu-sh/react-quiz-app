function FinishScreen({ points, totalPoints, highscore, dispatch }) {
  const percentage = Math.round((points / totalPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} ({percentage}
        %)
      </p>
      <p className="highscore">Highscore: {highscore}</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Replay
      </button>
    </>
  );
}

export default FinishScreen;
