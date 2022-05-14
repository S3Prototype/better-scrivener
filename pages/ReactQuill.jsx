import ReactQuill, { Quill } from "react-quill"; // ES6
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import QuillMarkdown from "quilljs-markdown";

const modules = {
  markdownOptions: {},
};

function App() {
  Quill.register("modules/markdownOptions", QuillMarkdown);
  return (
    <ReactQuill
      modules={modules}
      style={{ width: "100%", height: "50rem" }}
      theme="snow"
    />
  );
}

export default App;
