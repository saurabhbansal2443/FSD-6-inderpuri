import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleDecrement = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <div>
      <button onClick={handleIncrement}>Add</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>Minus</button>
    </div>
  );
};

export default App;
