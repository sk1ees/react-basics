import React, { useState } from "react";
import explorer from "./data/FolderData";
import Folder from "./components/Folder";
const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  console.log(explorerData);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        paddingLeft: "10vw",
        paddingTop: "10vw",
        alignItems: "start",
        width: "100%",
        height: "100vh",
        fontSize: "2rem",
      }}
    >
      <Folder explorer={explorerData} />
    </div>
  );
};

export default App;
