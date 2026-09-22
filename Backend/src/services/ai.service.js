import { useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import * as prism from "prismjs";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

console.log("EDITOR =", Editor)
console.log("EDITOR TYPE =", typeof Editor)

console.log("MARKDOWN =", ReactMarkdown)
console.log("MARKDOWN TYPE =", typeof ReactMarkdown)

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;