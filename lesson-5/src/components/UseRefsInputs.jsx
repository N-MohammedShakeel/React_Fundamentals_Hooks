import { useRef } from "react";

const UseRefs = () => {
  const ref = useRef(null);

  const handleClick = () => {
    if (ref.current) {
      ref.current.focus();
      ref.current.value = "ms";
    }
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default UseRefs;
