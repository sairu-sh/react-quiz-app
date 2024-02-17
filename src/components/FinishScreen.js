function FinishScreen({ points, totalPoints }) {
  const percentage = Math.round((points / totalPoints) * 100);
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {totalPoints} ({percentage}%)
    </p>
  );
}

export default FinishScreen;
