import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function submitChange(e) {
    setHeading(name);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={submitChange} value={name}>
        Submit
      </button>
    </div>
  );
}

export default App;
