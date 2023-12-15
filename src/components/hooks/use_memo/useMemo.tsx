import { useMemo, useState } from "react";

export const MemoExample = () => {
  console.log("Rendering component...");
  const [numberObj, setNumberObj] = useState({ input: 0 });
  const doubleNumber = useMemo(() => {
    return slowFunction(numberObj.input);
  }, [numberObj.input]);
  const buttonStyle = {
    marginRight: "10px",
  };
  return (
    <>
      <h2>useMemo</h2>
      <button style={buttonStyle} onClick={() => setNumberObj({ input: 3 })}>
        Double 3
      </button>
      <button style={buttonStyle} onClick={() => setNumberObj({ input: 5 })}>
        Double 5
      </button>
      <button style={buttonStyle} onClick={() => setNumberObj({ input: 10 })}>
        Double 10
      </button>
      <p className="use-memo__text">{doubleNumber}</p>
    </>
  );
};

function slowFunction(num: number) {
  console.log("calling slow function... 🐌");
  for (let i = 0; i <= 1000000000; i++) {
    // ⏰
  }
  const result = num * 2;
  console.log(`result: ${result}`);
  return result;
}
