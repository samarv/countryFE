import React, { useState } from "react";
import "./App.css";

function App() {
  const [country, setCountry] = useState("");

  const handleInput = e => {
    setCountry(e.target.value);
  };

  return (
    <div className="App">
      <h2>Autocomplete</h2>
      <p>Start typing:</p>
      <form className="formAuto" autocomplete="off">
        <div className="autocomplete">
          <input
            type="text"
            name="Country"
            value={country}
            placeholder="Country"
            onChange={handleInput}
          />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
