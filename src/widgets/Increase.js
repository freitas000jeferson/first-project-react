import React, { useState } from "react";

function Increase(props) {
  let [num, setNum] = useState(1);
  return (
    <>
      <h1>Ola {props.name}! Tudo bem?</h1>

      <button onClick={() => setNum(++num)}>1</button>
      <button onClick={() => setNum(--num)}>-1</button>

      <p>Result: {num}</p>
    </>
  );
}

export default Increase;
