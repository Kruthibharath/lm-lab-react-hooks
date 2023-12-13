import React, { useState } from "react";
//const Catsprops = {};

export const CountCats: React.FC = () => {
  const initialCount = 0;
  const [countCats, setCountCats] = useState(initialCount);
  const incrementCat = () => {
    setCountCats((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h2>useState</h2>
      <p>Click on the below button to increment the Cats.</p>
      {[...Array(countCats)].map(() => "🐈")}
      <br />
      <button onClick={incrementCat}>{countCats} Cats</button>
    </>
  );
};
