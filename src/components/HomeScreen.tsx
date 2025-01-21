import React from "react";

export const HomeScreen = () => {
  return (
    <div>
      <h1>Shesha IDE</h1>
      <button onClick={() => console.log("New Project")}>New Project</button>
      <button onClick={() => console.log("Open Project")}>Open Project</button>
      <button onClick={() => console.log("Recent Files")}>Recent Files</button>
    </div>
  );
};
