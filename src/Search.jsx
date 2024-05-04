import React, { useState } from "react";

import "./styles.css";

export default function Search() {
  let [city, setCity] = useState("");
  let [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is currently 20°C in ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form className="citySearch" onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a City" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <br />
      <h2>{message}</h2>
    </div>
  );
}
