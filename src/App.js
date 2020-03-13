import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";
import "./App.css";

function App() {
  const [countryOptions, setcountryOptions] = useState([]);

  const handleInput = e => {
    if (e.target.value !== "") {
      axios
        .post("http://localhost:5555/api/search/", {
          query: e.target.value,
        })
        .then(res => {
          console.log(res);
          let countryWithFLag = res.data.map(country => {
            country.image = {
              src: `data:image/jpeg;base64,${country.flag_png}`,
            };
            return country;
          });
          setcountryOptions(countryWithFLag);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div className="App">
      <h2>Autocomplete</h2>
      <p>Start typing:</p>
      <div className="formAuto">
        <Dropdown
          placeholder="Select Country"
          fluid
          search
          selection
          onSearchChange={handleInput}
          options={countryOptions}
        ></Dropdown>
      </div>
    </div>
  );
}

export default App;
