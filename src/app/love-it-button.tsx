"use client";

import { useSplitter } from "splitter-gg/client";

const LoveItButton = () => {
  const { trackConversion } = useSplitter();

  return (
    <button
      onClick={() => trackConversion("landing-page-x")}
      className={`px-2 py-1 text-xs rounded-lg border`}
    >
      Click me only if you are sure you love it!
    </button>
  );
};

export { LoveItButton };
