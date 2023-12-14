import { useRef, useState } from "react";

export const CountRenders = () => {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);
  const count = renderCount.current++;

  return (
    <>
      <h2>useRef</h2>
      <input
        value={value}
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <p>{value}</p>
      <p>I have rendered {count} times</p>
    </>
  );
};
