import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setCount(count + quantity);
  };

  const handleChangeQuantity = (event) => {
    const value = event.target.value;
    if (!!value && value > 0) {
      setQuantity(parseInt(value));
    }
  };

  return (
    <div className="app">
      <div className="app_wrapper">
        <div className="counter__form">
          <div className="base-input">
            <label>Incremento</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleChangeQuantity(e)}
            />
          </div>

          <button
            className="base-button"
            type="button"
            onClick={() => increment(4)}
          >
            Add more
          </button>
          <button
            className="base-button"
            type="button"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>

        <div className="display">
          <p className="display__counter">count is: <span className="display__highlight">{count}</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;
