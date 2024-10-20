import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  if (explorer.isFolder) {
    return (
      <>
        <div className="">
          <div
            onClick={() => {
              setExpand(!expand);
            }}
            style={{ cursor: "pointer" }}
          >
            📂 {explorer.name}
          </div>

          <div
            style={{
              marginLeft: "5vw",
              display: expand ? "flex" : "none",
              flexDirection: "column",
            }}
          >
            {explorer.items.map((item) => {
              return <Folder explorer={item}/>;
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <div>📃 {explorer.name}</div>;
  }
};

export default Folder;
