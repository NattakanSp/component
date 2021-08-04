import "./App.css";
// import { confirm } from "react-confirm-box";

function App() {
  const handleClick = () => {
    alert("click");
  };

  const handleSubmit = (event) => {
    // alert("Form is submitted");
    event.preventDefault();
    console.log("Form is submitted");
  };

  const handleSelect = () => {
    alert("Your value has been changed");
  };

  const handleClickButtonId = (id, event) => {
    alert(id);
  };

  const tickBox = (event) => {
    console.log(event.target.value);
    console.log(event.name);
  };

  const linkDirect = (event) => {
    const isConfirmed = window.confirm("Leave for https://google.com?");
    if (!isConfirmed) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <button className="buttonNewGame" onClick={handleClick}>
        Click
      </button>
      <button className="buttonNewGame" onClick={() => alert("Anonymous")}>
        Click Anonymous
      </button>
      <button
        className="buttonNewGame"
        onClick={function () {
          alert("Function expression");
        }}
      >
        Click function expression
      </button>

      <form className="buttonNewGame" onSubmit={handleSubmit}>
        <label className="labelTest" htmlFor="username">
          username :{" "}
        </label>
        <input type="text" onChange={(event) => console.log(event.target.value)}></input>
        <label className="labelTest">Please select : </label>
        <select onChange={handleSelect}>
          <option>1</option>
          <option>2</option>
        </select>
        <button className="buttonNewGame">Submit</button>
      </form>
      <button onClick={() => handleClickButtonId(1)}>handleClickButtonId</button>
      <button onClick={(event) => handleClickButtonId(2, event)}>handleClickButtonId</button>

      <input type="text" onChange={(event) => console.log(event.target.value)}></input>

      <select onChange={(event) => console.log(event.target.value)}>
        <option>Thailand</option>
        <option>Iran</option>
        <option>Turkey</option>
        <option>Slovenia</option>
        <option>Korea</option>
      </select>

      <input type="checkbox" name="checkbox1" value="IPHONE" onChange={tickBox}></input>
      <label>IPHONE</label>
      <input type="checkbox" name="checkbox2" value="OPPO" onChange={tickBox}></input>
      <label>OPPO</label>
      <input type="checkbox" name="checkbox2" value="SAMSUNG" onChange={tickBox}></input>
      <label>SAMSANG</label>

      <a href="https://www.google.co.th/?hl=th" onClick={linkDirect}>
        Google
      </a>
    </div>
  );
}

export default App;
