import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { stateCode } from "../misc/codes";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function StateExample() {
  const [count, setCount] = useState(0);

  function UpdateDemo(count: number) {
    return (
      <div
        key={count}
        className="w-56 sm:w-1/5 mx-auto py-5 m-2 text-center roll-out rounded-lg"
      >
        <p>{count}</p>
        <button
          className="w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
      </div>
    );
  }

  return (
    <div className="justify-center w-11/12 md:w-3/4 max-w-screen-xl bg-gray-50 mx-auto p-2 md:p-6 rounded-lg mt-8 shadow-md">
      <h2 className="text-4xl text">
        What is <span className="font-bold bg-black text-white">useState</span>
      </h2>
      <p className="text-lg my-5">
        Use state is one of the react hooks. It is used to keep the state of the
        component. As you can see in the example below, useState is being used
        to keep track of count. And everytime state changes the paragraph tag
        updating. When state changes the whole component re-renders.
      </p>

      <div className="flex flex-wrap">
        <SyntaxHighlighter
          language="javascript"
          wrapLines
          showLineNumbers
          style={atomOneLight}
          className="w-full sm:w-4/5"
        >
          {stateCode}
        </SyntaxHighlighter>

        {UpdateDemo(count)}
      </div>
    </div>
  );
}
