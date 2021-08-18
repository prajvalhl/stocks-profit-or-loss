import React from "react";

export function Footer() {
  const list = {
    display: "inline",
    margin: "0 2rem"
  };

  const link = {
    textDecoration: "none"
  };

  return (
    <div className="footer">
      <h3>About</h3>
      <p className="about-p">
        This app takes in the price at which you bought a stock, number of
        stocks and the current price of the stock and tells you if you're making
        a profit or loss off of it.
      </p>
      <h2>Connect with me on</h2>
      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
        <li style={list}>
          <a
            href="https://github.com/prajvalhl"
            style={link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/material-outlined/48/000000/github.png"
              alt="github logo"
            />
          </a>
        </li>
        <li style={list}>
          <a
            href="https://www.linkedin.com/in/hlprajval/"
            style={link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="linkedin logo"
            />
          </a>
        </li>
        <li style={list}>
          <a
            href="https://twitter.com/l_prajval"
            style={link}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/000000/twitter--v1.png"
              alt="twitter logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
