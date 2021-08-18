import "./styles.css";
import { Footer } from "./Footer";

export default function App() {
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
          <input id="initial-price" type="number" />
        </div>
        <div className="input-div">
          <label htmlFor="stock-quantity">Quantity of Stocks</label>
          <input id="stock-quantity" type="number" />
        </div>
        <div className="input-div">
          <label htmlFor="current-price">Current Price</label>
          <input id="current-price" type="number" />
        </div>
        <button>Calculate!</button>
        <div className="output">
          <p>Result 👇</p>
        </div>
        <Footer />
      </main>
    </div>
  );
}
