import React, { useState, useEffect } from "react";

function ColorBlock() {
  const [color, setColor] = useState("red");

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  useEffect(() => {
    console.log("Поточний колір:", color);
  }, [color]);

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          margin: "20px auto",
        }}
      ></div>
      <button onClick={toggleColor}>Змінити колір</button>
    </div>
  );
}

export default ColorBlock;
