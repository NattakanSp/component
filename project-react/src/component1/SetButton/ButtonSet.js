import "./ButtonSet.css";

function ButtonSet() {
  return (
    <div>
      <button className="buttonSet1" style={{ border: "2px solid red" }}>
        +
      </button>
      <span style={{ fontSize: "20px" }}>0</span>
      <button className="buttonSet1" style={{ border: "2px solid red" }}>
        -
      </button>

      <button className="buttonSet1" style={{ border: "2px solid red", width: "110px" }}>
        Reset
      </button>
    </div>
  );
}

export default ButtonSet;
