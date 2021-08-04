import { useState } from "react";
import "./App.css";

// import HeaderGame from "./component1/Dice/HeaderGame";
// import PlayerOne from "./component1/Dice/PlayerOne";
// import ScoreGameBox from "./component1/Dice/ScoreGameBox";
// import PlayerTwo from "./component1/Dice/PlayerTwo";
// function App() {
//   // let text = "Helloe React";
//   // const result = useState("Hello React");
//   // console.log(result);
//   // const state = result[0];
//   // const update = result[1];
//   // const [state, update] = useState("Hello React");
//   // const [message, setMessage] = useState("Hello React");
//   // const [title, setTital] = useState("Hello React");

//   // const handleClick = () => {
//   //   // text = " You click a button";
//   //   setMessage("You clicked a button");
//   // };
//   // return (
//   //   <div>
//   //     <h1>{message}</h1>
//   //     <button onClick={handleClick}>Click to Change text</button>
//   //   </div>
//   // );
//   // const handleClickAdd = () => {
//   //   // setCount(count + 1);
//   //   setCount((currentState) => currentState + 1);
//   // };
//   // const handleClickSubtract = () => {
//   //   // setCount(count - 1);
//   //   setCount((currentState) => currentState - 1);
//   // };

//   // const [count, setCount] = useState(0);
//   // return (
//   //   <div className="container">
//   //     <button onClick={handleClickAdd}>+</button>
//   //     <span>{count}</span>
//   //     <button onClick={handleClickSubtract}>-</button>
//   //   </div>
//   // );
//   // const [username, setUsername] = useState('');
//   // const [password,setPassword] = useState('');
//   // const [email,setEmail] = useState('');
//   // const [birthDate,setBirthDate] = useState('');
//   // const [user, setUser] = useState({
//   //   username: "",
//   //   password: "",
//   //   email: "",
//   //   birthDate: "",
//   // });

//   // const [convert, setConvert] = useState(1);
//   // const convertToBaht = (event) => {
//   //   return setConvert(convert * event.target.value * 30);
//   // };

// const [toHide, setToHide] = useState(false);
// const handleClickToHide = () => (toHide ? setToHide(false) : setToHide(true));

//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("1234");
//   // const handleClickClearBtn = () => {
//   //   setEmail("");
//   //   setPassword("");
//   // };
//   // const [isLogged, setIslogged] = useState(true);

//   return (
//     <div>
//       {/* <button onClick={handleClickToHide} className={ToHide ? "hide" : null}>
//         Click to change
//       </button> */}
//       {/* <button onClick={handleClickToHide}>Click to change</button>
//       <h1 className={ToHide ? "close" : null}>Text</h1>   */}
//       {/* <button onClick={handleClickToHide} className={toHide ? null : "hide"}>
//         Hide
//       </button>
//       <button onClick={handleClickToHide} className={toHide ? "hide" : null}>
//         Show
//       </button>
//       <p className={toHide ? null : "hide"}>Lorem ipsum dolor sit amet</p> */}
//       {/* <label>
//         Enter Dollar : <input onChange={convertToBaht}></input>
//       </label>
//       <h1>Covert to Baht :{convert}</h1> */}
//       {/* <form>
//         <div>
//           <label>Email : </label>
//           <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input>
//         </div>
//         <div>
//           <label>Password : </label>
//           <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}></input>
//         </div>
//         <button type="button" onClick={handleClickClearBtn}>
//           Login
//         </button>
//       </form> */}

//       {/* {isLogged ? <h1>Welcome back</h1> : <h1>Welcome guest</h1>} */}

//       {/* <HeaderGame />
//       <PlayerOne />
//       <ScoreGameBox />
//       <PlayerTwo /> */}
//     </div>
//   );

function App() {
  // const [diceScore, setDiceScore] = useState(1);

  // const [roundScore, setRoundScore] = useState(0);
  // const [PlayerOneScore, setPlayerOneScore] = useState([0, 0]);
  // const [playerTwoScore, setPlayerTwoScore] = useState(0);
  // const [currentPlayer, setCurentPlayer] = useState(0);

  // const rollDice = () => {
  //   const newDiceScore = Math.floor(Math.random() * 6) + 1;
  //   if (newDiceScore === 1) {
  //     const newCurrentPlayer = currentPlayer === 0 ? 1 : 0;
  //     setCurentPlayer(newCurrentPlayer);
  //     setRoundScore(0);
  //   } else {
  //     setRoundScore((curRoundScore) => curRoundScore + newDiceScore);
  //   }
  //   setDiceScore(newDiceScore);
  // };

  // const [currentPlayer, setCurentPlayer] = useState("Two");
  // const changeCurrentPlayer = () => {}

  return (
    <div>
      <div className="SetNewGame">
        <button className="buttonNewGame">New Game</button>
      </div>

      <div className="SetScoreBox">
        <div className="SetPlayer1">
          <h1 className="textPlayer1">PLAYER 1</h1>
          <p className="scorePlayer1">0</p>
        </div>
      </div>

      <div className="SetGameScore">
        <div className="RollKeep">
          <button className="Roll">Roll</button>
          <button className="Keep">Keep</button>
        </div>
        <div className="ScoreCount">
          <h1 className="ScoreCount1">{setDiceScore}</h1>
        </div>
        <div>
          <p>
            Round Score : <span>{setDiceScore}</span>
          </p>
        </div>
      </div>

      <div className="SetPlayer2">
        <h1 className="textPlayer2">PLAYER 2</h1>
        <p className="scorePlayer2">0</p>
      </div>
    </div>
  );
}
export default App;
