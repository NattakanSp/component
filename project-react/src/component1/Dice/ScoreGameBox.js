import "./ScoreGameBox.css";
function ScoreGameBox() {
  return (
    <div className="SetGameScore">
      <div className="RollKeep">
        <button className="Roll">Roll</button>
        <button className="Keep">Keep</button>
      </div>
      <div className="ScoreCount">
        <h1 className="ScoreCount1">1</h1>
      </div>
      <div>
        <p>
          Round Score : <span>0</span>{" "}
        </p>
      </div>
    </div>
  );
}
export default ScoreGameBox;
