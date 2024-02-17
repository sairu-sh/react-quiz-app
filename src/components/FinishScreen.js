function FinishScreen({ points, totalPoints, highscore }) {
  const percentage = Math.round((points / totalPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} ({percentage}
        %)
      </p>
      <p className="highscore">Highscore: {highscore}</p>
    </>
  );
}

export default FinishScreen;
