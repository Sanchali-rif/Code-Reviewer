import { useState } from "react";
import EditorImport from "react-simple-code-editor";
import * as prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import axios from "axios";
import "./App.css";

// Fix CommonJS/Vite interop issue
const Editor = EditorImport.default ?? EditorImport;

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState("");

  async function reviewCode() {
    try {
      const response = await axios.post(
        "http://localhost:3000/ai/get-review",
        { code }
      );

      console.log("Review:", response.data);

      setReview(response.data);
    } catch (error) {
      console.error("Review Error:", error);

      setReview(
        "❌ Failed to get code review. Make sure the backend server is running."
      );
    }
  }

  return (
    <main>
      {/* LEFT SIDE */}
      <div className="left">

        <div className="code">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              prism.highlight(
                code,
                prism.languages.javascript,
                "javascript"
              )
            }
            padding={10}
            style={{
              fontFamily: '"Fira Code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%",
              overflow: "auto",
            }}
          />
        </div>

        <button
          onClick={reviewCode}
          className="review-btn"
        >
          Review
        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="right">

        <ReactMarkdown
          rehypePlugins={[rehypeHighlight]}
        >
          {review}
        </ReactMarkdown>

      </div>
    </main>
  );
}

export default App;