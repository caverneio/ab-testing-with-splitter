"use client";

import { useSplitter } from "splitter-gg/client";

const ClickMeButton = ({ color }: { color: "red" | "green" }) => {
  let bgColor = color === "red" ? "bg-red-500" : "bg-green-500";
  const { trackClick } = useSplitter();

  return (
    <button
      onClick={() => trackClick("landing-page-x")}
      className={`px-4 py-2 rounded-lg text-white ${bgColor}`}
    >
      Click me a lot of times!
    </button>
  );
};

export { ClickMeButton };
