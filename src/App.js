import React, { useState } from "react";
import "./app.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";

function App() {
  //useSelector is a function that will use the argument state to pull the data from our reducers state.
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  //useDispatch to call actions
  const dispatch = useDispatch();
  const signInBtn = document.querySelector(".signInBtn");
  const [secretNumber, setRandom] = useState(Math.floor(Math.random() * 30));

  const canLogin = (counter) => {
    if (counter === secretNumber) {
      return true;
    } else {
      return false;
    }
  };
  if (signInBtn) {
    if (counter === secretNumber) {
      signInBtn.style.backgroundColor = "blue";
      signInBtn.style.color = "aliceblue";
    } else {
      signInBtn.style.backgroundColor = "rgba(0, 0, 255, 0.1)";
      signInBtn.style.color = "rgb(69,69,69)";
    }
  }
  return (
    <div className="App">
      <div className="formContainer">
        <h1 className="secretNumber">{secretNumber}</h1>
        <h1>Counter: {counter} </h1>
        <div className="buttonContainer">
          <button
            className="incrementBtn"
            onClick={() => dispatch(canLogin() ? login() : increment(5))}
          >
            +5
          </button>
          <button
            className="decrementBtn"
            onClick={() => dispatch(canLogin() ? login() : decrement(1))}
          >
            -1
          </button>
        </div>
        <button
          className="signInBtn"
          onClick={canLogin(counter) ? () => dispatch(login()) : () => ""}
        >
          Sign In
        </button>
        {isLogged && counter === secretNumber ? (
          <h3>
            Valuable Information you shouldn't see unless counter equals{" "}
            {secretNumber}
          </h3>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
