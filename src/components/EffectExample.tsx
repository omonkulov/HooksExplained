import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { effectCode } from "../misc/codes";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  function UpdateDemo(count: number) {
    return (
      <div
        key={count}
        className="w-56 sm:w-1/5 mx-auto py-5 m-2 text-center align-baseline roll-out rounded-lg"
      >
        <p>{count}</p>
      </div>
    );
  }
  return (
    <div className="justify-center w-11/12 md:w-3/4 max-w-screen-xl bg-gray-50 mx-auto p-2 md:p-6 rounded-lg mt-8 shadow-md">
      <h2 className="text-4xl text">
        What is <span className="font-bold bg-black text-white">useEffect</span>
      </h2>
      <p className="text-lg my-5">
        By using this Hook, you tell React that your component needs to do
        something after render. React will remember the function you passed
        (we’ll refer to it as our “effect”), and call it later after performing
        the DOM updates. In this effect, we set the document title, but we could
        also perform data fetching or call some other imperative API.
      </p>

      <div className="flex flex-wrap sm:flex-nowrap">
        <SyntaxHighlighter
          language="javascript"
          wrapLines
          showLineNumbers
          style={atomOneLight}
          className="w-full sm:w-4/5"
        >
          {effectCode}
        </SyntaxHighlighter>

        {UpdateDemo(count)}
      </div>
    </div>
  );
}
