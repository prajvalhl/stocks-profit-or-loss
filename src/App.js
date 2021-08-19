import "./styles.css";
import { useState } from "react";
import { Footer } from "./Footer";

export default function App() {
  const [initialPrice, setInitialPrice] = useState("");
  const [stocksQuantity, setQuantity] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");
  const [flag, setFlag] = useState(true);
  const [msg, setMsg] = useState("");
  const [output, setOutput] = useState("");

  function calculateProfitOrLoss(initial, quantity, current) {
    if (initial > current) {
      const loss = (initial - current) * quantity;
      const lossPercentage = (loss / initial) * 100;

      setOutput(
        `Oh no! you've made loss of ${lossPercentage}% which is $${loss} 😟`
      );
    } else if (current > initial) {
      const profit = (current - initial) * quantity;
      const profitPercentage = (profit / initial) * 100;

      setOutput(
        `Yaay!! you've made profit of ${profitPercentage}% which is $${profit} 😃`
      );
    } else {
      setOutput(`No Profit or Loss!! 😐`);
    }
  }

  function handleClick() {
    if (initialPrice && stocksQuantity && currentPrice) {
      setFlag(false);
      calculateProfitOrLoss(
        Number(initialPrice),
        Number(stocksQuantity),
        Number(currentPrice)
      );
    } else {
      setFlag(true);
      setMsg("One or more fields are empty. Please fill them all to continue!");
    }
  }
  return (
    <div className="App">
      <h1>Stocks: Profit | Loss Calculator</h1>
      <main>
        <h4>
          Enter the following details and we'll tell you if you've made profit
          or loss.
        </h4>
        <div className="input-div">
          <label htmlFor="initial-price">Initial Price</label>
          <input
            id="initial-price"
            type="number"
            onChange={(e) => setInitialPrice(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="stock-quantity">Quantity of Stocks</label>
          <input
            id="stock-quantity"
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label htmlFor="current-price">Current Price</label>
          <input
            id="current-price"
            type="number"
            onChange={(e) => setCurrentPrice(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Calculate!</button>
        <div className="output">
          <p>Result 👇</p>
          <p>{flag && msg}</p>
          <p>{!flag && output}</p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
