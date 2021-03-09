import React, { useState } from "react";

const UseStateBasics = () => {
  console.log(useState);
  const [text, setText] = useState("rantom tile");

  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World");
    } else {
      setText("random title");
    }
  };

  return (
    <div>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change title
      </button>
      <h2> useState basic example </h2>
    </div>
  );
};

export default UseStateBasics;
