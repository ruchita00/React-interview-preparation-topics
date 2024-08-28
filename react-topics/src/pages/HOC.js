import React, { useState } from "react";

const HOC = () => {
  return (
    <div>
      <HOCRED cmp={Counter} />
      <HOCBlUE cmp={Counter} />
    </div>
  );
};

function HOCRED(props) {
  return (
    <h3 style={{ backgroundColor: "red", width: "100px" }}>
      <props.cmp />
    </h3>
  );
}
function HOCBlUE(props) {
  return (
    <h3 style={{ backgroundColor: "blue", width: "100px", margin: "70px" }}>
      <props.cmp />
    </h3>
  );
}
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>update</button>
    </div>
  );
};

export default HOC;
