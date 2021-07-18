import React, { useState } from "react";

function Calc(props) {
  let [num, setNum] = useState(0);
  let [a, setA] = useState(0);
  let [b, setB] = useState(0);

  let [text, setText] = useState("");
  function add() {
    setNum(parseInt(a) + parseInt(b));
  }
  return (
    <>
      <input
        placeholder="Digite algo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h1>{text}</h1>
      <br />
      <input name="a" value={a} onChange={(e) => setA(e.target.value)} />
      <input name="b" valeu={b} onChange={(e) => setB(e.target.value)} />
      <button onClick={add}>+</button>
      <p>Result: {num}</p>
    </>
  );
}

export default Calc;
