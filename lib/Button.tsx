import { useState } from "react";

type ButtonProps = {
  type: "primary" | "secondary";
  size: "small" | "medium" | "large";
};
export function Button({ type, size }: ButtonProps) {
  let [count, setCount] = useState(0);

  let typeStyles = {
    primary:
      "bg-purple-500 text-white hover:bg-purple-700 active:bg-purple-800",
    secondary: "bg-gray-500 text-white hover:bg-gray-700 active:bg-gray-800",
  };

  let sizeStyles = {
    small: "px-2 py-1",
    medium: "px-3 py-2",
    large: "px-4 py-3",
  };

  return (
    <button
      onClick={() => setCount((count) => count + 1)}
      className={
        "border border-black rounded " +
        typeStyles[type] +
        " " +
        sizeStyles[size]
      }
    >
      Count is {count}
    </button>
  );
}
