import React from "react";
import { Editor } from "@monaco-editor/react";

const CodeEditor = () => {
  const handleEditorChange = (value: string | undefined) => {
    console.log(value);
  };

  return (
    <Editor
      height="500px"
      defaultLanguage="plaintext"
      defaultValue="कार्यः संयोजन(क्यूबिट1, क्यूबिट2)।"
      onChange={handleEditorChange}
      options={{ fontSize: 14, language: "custom-sanskrit" }}
    />
  );
};

export default CodeEditor;
