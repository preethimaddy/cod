import React from "react";

const Errorcount = () => {
  let count = 0;

  const handleClick = () => {
    count = count + 1;
    console.log(count);
  };
  return (
    <div>
      <h1>testingggg</h1>
      <h2>{count}</h2>
      <button type="button" onClick={handleClick} className="btn-primary">
        Increase{" "}
      </button>
    </div>
  );
};

export default Errorcount;
